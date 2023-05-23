import type { Area } from '@/interfaces'
import { useAreasStore } from '@/store'
import { ToastDelete } from '@/ui'
import Link from 'next/link'
import type { FC } from 'react'
import { toast } from 'react-hot-toast'
import { TabelCell, TableRow } from '@/components/table'

interface Props {
  area: Area
}

export const AreaListItem: FC<Props> = ({ area }) => {
  const {
    id,
    name,
    status: { active }
  } = area
  const deleteArea = useAreasStore((state) => state.deleteArea)

  const onDelete = (): void => {
    deleteArea(id)
  }

  const handleDelete = (): void => {
    toast.custom((t) => (
      <ToastDelete t={t} onDelete={onDelete}>
        <p>
          Estas seguro que deseas eliminar la area <b>{name}</b>
        </p>
      </ToastDelete>
    ))
  }

  return (
    <TableRow>
      <TabelCell
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {name}
      </TabelCell>
      <td
        className={`px-6 py-4 font-medium ${
          active ? 'text-green-700' : 'text-red-700'
        }`}
      >
        {active ? 'ACTIVO' : 'NO ACTIVO'}
      </td>
      <TabelCell className="px-6 py-4 text-right">
        <div className="flex gap-4 justify-end">
          <Link
            className="font-medium text-blue-600 hover:underline"
            href={`/dashboard/areas/${name}`}
          >
            Editar
          </Link>
          <button
            className="font-medium text-red-600 hover:underline"
            onClick={handleDelete}
          >
            Eliminar
          </button>
        </div>
      </TabelCell>
    </TableRow>
  )
}
