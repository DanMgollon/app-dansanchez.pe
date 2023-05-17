import { useMemo } from 'react'
import type { FC } from 'react'
import { Modal } from './'
import { IoClose } from 'react-icons/io5'
import { useAreasStore, useUIStore } from '@/store'
import { AiOutlineSave } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorForm } from '@/components/form'
import type { Area } from '@/interfaces'

const schema = yup
  .object({
    name: yup.string().required('El nombre es requerido')
  })
  .required()

export const AreaModal: FC = () => {
  const openModalArea = useUIStore((state) => state.openModalArea)
  const setModalArea = useUIStore((state) => state.setModalArea)
  const activeArea = useUIStore((state) => state.activeArea)
  const clearActiveArea = useUIStore((state) => state.clearActiveArea)
  const updateArea = useAreasStore(state => state.updateArea)
  const createArea = useAreasStore(state => state.createArea)

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm<Area>({
    resolver: yupResolver(schema),
    values: (activeArea as Area) ?? {}
  })

  const onSubmit = handleSubmit((data) => {
    const area: Area = {
      id: data?.id,
      name: data.name,
      status: {
        active: data.status.active.toString() === 'true'
      }
    }

    if (data.id !== undefined) {
      updateArea(area)
      return
    }

    const { name, status: { active } } = area
    createArea(name, active)
  })
  const title = useMemo(() => {
    return activeArea?.id !== undefined ? 'Editar Area' : 'Agregar Area'
  }, [activeArea?.id])

  const handleClose = (): void => {
    setModalArea(false)
    clearActiveArea()
    reset()
  }

  return (
    <Modal isOpen={openModalArea} handleClose={handleClose}>
      <header className="mb-4 flex justify-end">
        <button
          className="text-sm uppercase font-semibol text-red-500 py-1 px-2 rounded flex gap-1 items-center justify-center hover:outline outline-1 hover:outline-red-500 transition-all"
          onClick={handleClose}
        >
          <IoClose size={18} />
        </button>
      </header>
      <h2 className="font-bold text-3xl mb-5 text-center">{title}</h2>
      <form className="w-[400px]" onSubmit={onSubmit}>
        <div className="w-full mb-3">
          <label htmlFor="name" className="block text-sm mb-2 text-slate-500">
            Nombre Producto:
          </label>
          <input
            type="text"
            className="w-full border bg-slate-50 border-slate-300 outline-none rounded-md py-2 px-3 text-sm focus:shadow"
            {...register('name')}
            autoComplete="off"
          />
          {errors.name !== undefined && (
            <ErrorForm message={errors.name.message as string} />
          )}
        </div>

        <div className="w-full">
          <label
            htmlFor="productName"
            className="block text-sm mb-2 text-slate-500"
          >
            Activo:
          </label>
          <select
            className="w-full border bg-slate-50 border-slate-300 outline-none rounded-md py-2 px-3 text-sm focus:shadow"
            {...register('status.active')}
            defaultValue={'false'}
          >
            <option value="true" className='py-2 px-3'>ACTIVO</option>
            <option value="false" className='py-2 px-3'>NO ACTIVO</option>
          </select>
        </div>
        <button
          type="submit"
          className="mt-8 flex items-center justify-center gap-2 bg-blue-600 text-white font-bold w-full rounded-md py-2 px-3 hover:bg-blue-700 transition-colors"
        >
          <AiOutlineSave />
          GUARDAR
        </button>
      </form>
    </Modal>
  )
}
