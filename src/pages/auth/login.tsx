import { type GetServerSideProps } from 'next'
import { FormLogin } from '@/components/form'
import Head from 'next/head'
import type { FC } from 'react'
import { getSession } from 'next-auth/react'

const Login: FC = () => {
  return (
    <>
      <Head>
        <title>Iniciar sesión</title>
      </Head>
      <section className="min-h-screen w-full flex justify-center items-center bg-slate-50">
        <div className="rounded-lg py-5 px-7 w-full max-w-lg border">
          <h2 className="font-bold tracking-tighter text-6xl mb-14 text-center">
            Ferretería{' '}
            <p className="text-blue-600 inline-block">
              J<span className="text-base">&</span>R
            </p>
          </h2>
          <FormLogin />
        </div>
      </section>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  const session = await getSession({ req })
  const { p = '/' } = query

  if (session !== null) {
    return {
      redirect: {
        destination: p.toString(),
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default Login
