import { Spinner } from '@/ui'
import type { FC } from 'react'

export const LodingProducts: FC = () => {
  return (
    <tbody className="w-full">
      <tr className='w-full'>
        <td colSpan={10} className="w-full p-4">
            <Spinner />
            <span className="block text-gray-500 text-sm mt-3 text-center">Cargando...</span>
        </td>
      </tr>
    </tbody>
  )
}
