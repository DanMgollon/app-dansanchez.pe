import { AiOutlineSave } from 'react-icons/ai'
import { ErrorForm } from '../form'
import type { Area } from '@/interfaces'
import { useForm } from 'react-hook-form'
import type { FC } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAreasStore } from '@/store'
import { Spinner } from '@/ui'

interface Props {
  onSubmit: (data: any) => void
  area?: Area
}

const schema = yup.object().shape({
  name: yup.string().required('El nombre de la area es requerido')
}).required()

export const FormArea: FC<Props> = ({ area, onSubmit }) => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<Area>({
    values: area ?? undefined,
    resolver: yupResolver(schema)
  })

  const isLoading = useAreasStore(state => state.isLoading)

  return (
    <form
      className="w-full md:w-[50%] mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <div className="w-full mb-3">
          <label htmlFor="name" className="block text-sm mb-2 text-slate-500">
            Nombre de la area:
          </label>
          <input
            type="text"
            className="w-full border bg-slate-50 border-slate-300 outline-none rounded-md py-2 px-3 text-sm focus:shadow"
            autoComplete="off"
            {...register('name')}
          />
          {errors.name !== undefined && (
            <ErrorForm message={errors.name.message as string} />
          )}
        </div>
        <div className="w-full mb-3">
          <label htmlFor="name" className="block text-sm mb-2 text-slate-500">
            Nombre de la area:
          </label>
          <select
            className="w-full border bg-slate-50 border-slate-300 outline-none rounded-md py-2 px-3 text-sm focus:shadow"
            defaultValue="false"
            {...register('status.active')}
          >
            <option value="true" className="p-6">
              Activo
            </option>
            <option value="false" className="p-6">
              No activo
            </option>
          </select>
          {errors.status !== undefined && (
            <ErrorForm message={errors.status.message as string} />
          )}
        </div>
      </div>
      <button
        type="submit"
        className={`mt-8 flex items-center justify-center gap-2 bg-blue-600 text-white font-bold w-full rounded-md py-2 px-3 hover:bg-blue-700 transition-colors grayscale ${isLoading ? 'grayscale' : 'grayscale-0'}`}
      >
        {
          isLoading
            ? <Spinner />
            : (
                <>
                  <AiOutlineSave className="text-[20px] " />
                  GUARDAR
                </>
              )
        }
      </button>
    </form>
  )
}
