import { AreasList } from '@/components/areas'
import { DashboardLayout } from '@/layout'
import { useAreasStore } from '@/store'
import { type FC, useEffect } from 'react'
import { toast } from 'react-hot-toast'

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
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-neutral-800">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nombre area
                </th>
                <th scope="col" className="px-6 py-3">
                  Estado
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <AreasList areas={areas} />
          </table>
        </div>
      </section>
    </DashboardLayout>
  )
}
export default AreasPage
