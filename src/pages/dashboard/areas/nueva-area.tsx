import { DashboardLayout } from '@/layout'
import { type FC, useEffect } from 'react'
import { useAreasStore } from '@/store'
import { toast } from 'react-hot-toast'
import { FormArea } from '@/components/areas'

interface FormState {
  name: string
  status: string
}

const NewProductPage: FC = () => {
  const creareArea = useAreasStore((state) => state.createArea)
  const isAdded = useAreasStore((state) => state.isAdded)

  const onSubmit = (data: FormState): void => {
    const { name, status } = data
    const statusAsBoolean = status === 'true'
    creareArea(name, statusAsBoolean)
  }

  useEffect(() => {
    if (isAdded) {
      toast.success('Area agregada correctamente', {
        position: 'top-right'
      })
    }
  }, [isAdded])

  return (
    <DashboardLayout>
      <div className="mb-10 text-3xl font-extrabold">
        <h3>
          Agregar una nueva <span className="text-blue-500">Area</span>
        </h3>
      </div>
      <div>
        <FormArea onSubmit={onSubmit}/>
      </div>
    </DashboardLayout>
  )
}

export default NewProductPage
