import { dbUsers } from '@/database'
import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'ferreteria' },
        password: { label: 'Password', type: 'password', placeholder: '*****' }
      },
      async authorize (credentials, req) {
        if (credentials === undefined) return null
        const user = await dbUsers.checkUserPassword(credentials.username, credentials.password)
        return user
      }
    })
  ],
  pages: {
    signIn: '/auth/login'
  },
  session: {
    strategy: 'jwt',
    maxAge: 2592000,
    updateAge: 86400
  },
  callbacks: {
    async jwt ({ token, user, account }) {
      if (account !== undefined) {
        switch (account?.type) {
          case 'credentials':
            token.user = user as any
            break
        }
      }
      return token
    },
    session ({ token, session }) {
      session.user = token.user
      return session
    }

  }
}

export default NextAuth(authOptions)
