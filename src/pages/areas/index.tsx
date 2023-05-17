import { AreasList } from '@/components/areas/AreasList'
import { DashboardLayout } from '@/layout'
import { useAreasStore } from '@/store'
import { useUIStore } from '@/store/useUIStore'
import { AreaModal } from '@/ui'
import type { FC } from 'react'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'

const AreasPage: FC = () => {
  const areas = useAreasStore((state) => state.areas)
  const setModalArea = useUIStore((state) => state.setModalArea)

  const handleNewArea = (): void => {
    setModalArea(true)
  }

  return (
    <DashboardLayout title="Areas">
      <section className="pb-4">
        <div className="mb-4">
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded font-bold flex gap-2 items-center hover:bg-blue-700 transition-colors"
            onClick={handleNewArea}
          >
            <AiOutlineAppstoreAdd size={20} />
            NUEVA AREA
          </button>
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
        <AreaModal />
      </section>
    </DashboardLayout>
  )
}
export default AreasPage
