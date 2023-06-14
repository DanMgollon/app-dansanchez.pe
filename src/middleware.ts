import { getToken } from 'next-auth/jwt'
import { type NextRequest, NextResponse } from 'next/server'

export async function middleware (req: NextRequest): Promise<NextResponse> {
  if (req.nextUrl.pathname.startsWith('/dashboard')) {
    const session = await getToken({ req })
    if (session === null) {
      return NextResponse.redirect(new URL('/', req.url))
    }
  }

  return NextResponse.next()
}
