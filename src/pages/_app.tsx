import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Auth } from '@/hooks'
import { SessionProvider } from 'next-auth/react'

export default function App ({ Component, pageProps: { session, ...pageProps } }: AppProps): JSX.Element {
  return (
    <SessionProvider>
      <Auth>
        <Component {...pageProps} />
      </Auth>
    </SessionProvider>
  )
}
