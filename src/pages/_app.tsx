import '@/styles/globals.css'
import '@/styles/Spinner.css'
import type { AppProps } from 'next/app'
import { Auth } from '@/hooks'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'

export default function App ({ Component, pageProps: { session, ...pageProps } }: AppProps): JSX.Element {
  return (
    <SessionProvider>
      <Auth>
        <Component {...pageProps} />
        <Toaster />
      </Auth>
    </SessionProvider>
  )
}
