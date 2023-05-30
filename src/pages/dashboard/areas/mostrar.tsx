import { AreasList } from '@/components/areas'
import { Table } from '@/components/table'
import { DashboardLayout } from '@/layout'
import { useAreasStore } from '@/store'
import { type FC, useEffect } from 'react'
import { toast } from 'react-hot-toast'

const HEADS_ROWS = ['Nombre area', 'Estado', 'Acciones']

const AreasPage: FC = () => {
  const areas = useAreasStore((state) => state.areas)
  const error = useAreasStore((state) => state.error)

  useEffect(() => {
    if (error !== null) {
      toast.error(error, { position: 'bottom-right' })
    }
  }, [error])

  return (
    <DashboardLayout title="Areas">
      <section className="pb-4">
        <div className='mb-5 text-3xl font-extrabold'>
          <h3>Total de areas: <span className='text-blue-500'>{areas.length}</span></h3>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <Table heads={HEADS_ROWS}>
            <AreasList areas={areas} />
          </Table>
        </div>
      </section>
    </DashboardLayout>
  )
}
export default AreasPage
