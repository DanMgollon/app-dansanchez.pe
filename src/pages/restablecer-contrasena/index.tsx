import { ErrorForm, InputField } from '@/components/form'
import { ButtonPrimary } from '@/ui'
import Link from 'next/link'
import type { FC } from 'react'
import { type GetServerSideProps } from 'next'
import Head from 'next/head'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { resetPasswordSchema } from '@/validations'
import { useRouter } from 'next/router'
import type { ResetPasswordQuery } from '@/interfaces/ResetPassword'
import { useResetPasswsord } from '@/store'
import { shallow } from 'zustand/shallow'
import { ResetPasswordMessage } from '@/components/reset-password'
import { dbTokenExists } from '@/database/dbSecurity'

interface FormState {
  password: string
  confirmPassword: string
}

const ResetPasswordPage: FC = () => {
  const router = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormState>({
    resolver: yupResolver(resetPasswordSchema)
  })
  const {
    resetPassword,
    isRessetingPassword,
    isErrorResetPassword,
    resetPasswordMessage
  } = useResetPasswsord(
    (state) => ({
      resetPassword: state.resetPassword,
      isRessetingPassword: state.isRessetingPassword,
      isErrorResetPassword: state.isErrorResetPassword,
      resetPasswordMessage: state.resetPasswordMessage
    }),
    shallow
  )

  const onSubmit = (data: FormState): void => {
    const { user, token } = router.query as unknown as ResetPasswordQuery
    const idUserAsNumber = Number(user)
    resetPassword(idUserAsNumber, token, data.password)
  }

  return (
    <>
      <Head>
        <title>Restablecer contraseña</title>
      </Head>
      <section className="bg-slate-50 min-h-screen grid grid-cols-1 place-content-center w-full">
        <div className="w-[90%] mx-auto md:w-[500px] bg-white py-10 px-8 shadow">
          <header className="mb-6">
            <h2 className="text-2xl mb-2 font-extrabold text-neutral-800 text-center">
              CAMBIA TU CONTRASEÑA
            </h2>
            <p className="text-center text-[15px] text-zinc-400">
              Ingrese una nueva contraseña a continuación para cambiar su
              contraseña
            </p>
          </header>
          <form className="mb-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <Controller
                control={control}
                name="password"
                defaultValue=""
                render={({ field }) => (
                  <InputField
                    label="Nueva contraseña"
                    type="password"
                    placeholder="Nueva contraseña"
                    {...field}
                  />
                )}
              />
              {errors.password !== undefined && (
                <ErrorForm message={errors.password.message as string} />
              )}
            </div>
            <div>
              <Controller
                control={control}
                name="confirmPassword"
                defaultValue=""
                render={({ field }) => (
                  <InputField
                    label="Repite tu nueva contraseña"
                    type="password"
                    placeholder="Repite la contraseña"
                    {...field}
                  />
                )}
              />

              {errors.confirmPassword !== undefined && (
                <ErrorForm message={errors.confirmPassword.message as string} />
              )}
            </div>
            <ButtonPrimary
              className="w-full mt-6"
              disabled={isRessetingPassword}
            >
              CAMBIAR CONTRASEÑA
            </ButtonPrimary>
          </form>
          <footer className="flex justify-end">
            <div>
              <p className="text-center text-sm text-zinc-500">
                ¿Ya tienes una cuenta?{' '}
                <Link href="/" className="text-blue-800 hover:underline">
                  Inicia sesión
                </Link>
              </p>
            </div>
          </footer>
          {resetPasswordMessage !== null && (
            <ResetPasswordMessage
              isError={isErrorResetPassword}
              message={resetPasswordMessage }
            />
          )}
        </div>
      </section>
    </>
  )
}

export default ResetPasswordPage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = ctx.query.token
  const existsToken = await dbTokenExists(token as string)

  if (
    token === undefined ||
    token === null ||
    existsToken === false ||
    existsToken === null
  ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
