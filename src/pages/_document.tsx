import { Html, Head, Main, NextScript } from 'next/document'

export default function Document (): JSX.Element {
  return (
    <Html lang="es">
      <Head>
        <link rel="shortcut icon" href="/icon.ico" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
