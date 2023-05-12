import { getToken } from 'next-auth/jwt'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware (req: NextRequest): Promise<NextResponse> {
  const session = await getToken({ req })

  if (session === null) {
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/areas', '/productos', '/ventas', '/reportes']
}
