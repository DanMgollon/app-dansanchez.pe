import { getToken } from 'next-auth/jwt'
import { type NextRequest, NextResponse } from 'next/server'

export async function middleware (req: NextRequest): Promise<NextResponse> {
  if (req.nextUrl.pathname.startsWith('/dashboard')) {
    const session = await getToken({ req })
    if (session === null) {
      return NextResponse.redirect(new URL('/', req.url))
    }
  }

  if (
    req.nextUrl.pathname.startsWith('/api') &&
    !req.nextUrl.pathname.startsWith('/api/auth') &&
    !req.nextUrl.pathname.startsWith('/api/reset-password')
  ) {
    const session = await getToken({ req })
    if (session === null) {
      return NextResponse.json(
        JSON.stringify({
          message: 'Ups, parece que no tienes permisos para realizar esta acción'
        }),
        { status: 401 }
      )
    }
  }

  return NextResponse.next()
}
