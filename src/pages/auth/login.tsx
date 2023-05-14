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
      <section className="min-h-screen w-full md:flex gap-2 bg-slate-50">
        <div className="hidden md:block min-h-screen w-2/5 relative">
          <img
            src="/images/ferreteria.jpg"
            alt="Imagen sobre herramientas"
            className="h-full object-cover brightness-[.55]"
          />
          <h2 className="text-white font-extrabold text-3xl mb-14 text-center absolute left-5 top-5">
            Ferretería{' '}
            <p className="text-inherit inline-block">
              J<span className="text-base">&</span>R
            </p>
          </h2>
        </div>
        <div className="w-full md:w-3/5 h-screen flex flex-col justify-center items-center">
          <div className="w-10/12 mx-auto md:w-8/12 lg:w-6/12">
            <h3 className="text-5xl font-extrabold text-center mb-8">
              Iniciar Sesión
            </h3>
            <FormLogin />
          </div>
        </div>
      </section>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query
}) => {
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
