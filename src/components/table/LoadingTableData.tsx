import { Spinner } from '@/ui'
import type { FC } from 'react'

export const LoadingTableData: FC = () => {
  return (
    <td colSpan={99}>
      <div className="mx-auto my-5">
        <Spinner />
        <span className="block text-gray-500 text-sm mt-3 text-center">
          Cargando...
        </span>
      </div>
    </td>
  )
}
