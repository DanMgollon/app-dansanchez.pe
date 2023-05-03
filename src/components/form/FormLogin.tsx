import type { FC } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorForm } from '@/components/form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

interface FormData {
  username: string
  password: string
}

const schema = yup.object({
  username: yup.string().required('El usuario es requerido'),
  password: yup.string().min(6, 'La contraseña debe tener mínimo 6 caracteres').required('La contraseña es requerida')
}).required()

export const FormLogin: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form className="w-full" onSubmit={onSubmit}>
      <div className="w-full mb-4">
        <label htmlFor="" className="block text-gray-500 mb-1">
          Usuario
        </label>
        <input
          type="text"
          className="w-full bg-gray-50 border border-gray-300 rounded-md py-[7px] px-4 outline-none"
          placeholder="ferreteria"
          {...register('username')}
          autoComplete="off"
        />
        {errors.username != null && (
          <ErrorForm message={errors.username?.message as string} />
        )}
      </div>

      <div className="w-full mb-6">
        <label htmlFor="" className="block text-gray-500 mb-1">
          Contraseña
        </label>
        <input
          type="password"
          className="w-full bg-gray-50 border border-gray-300 rounded-md py-[7px] px-4 outline-none"
          placeholder="*******"
          {...register('password')}
          autoComplete="off"
        />
        {errors.password != null && (
          <ErrorForm message={errors.password?.message as string} />
        )}
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-neutral-900 font-semibold py-[6px] text-white text-lg hover:bg-neutral-700 transition-colors "
      >
        INGRESAR
      </button>
    </form>
  )
}
