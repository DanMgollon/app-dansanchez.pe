import type { Product } from '@/interfaces'
import Link from 'next/link'
import type { FC } from 'react'

interface Props {
  product: Product
}

const ProductListItem: FC<Props> = ({ product }) => {
  const {
    name,
    stock,
    areas,
    status,
    products_types: productsTypes,
    price
  } = product
  const { name: areaName } = areas
  const { active } = status
  const { type } = productsTypes
  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900">
        {name}
      </th>
      <td className="px-6 py-4 font-medium text-neutral-900"> S/ {price}</td>
      <td className="px-6 py-4 font-medium text-neutral-900">{stock}</td>
      <td className="px-6 py-4 font-medium text-neutral-900">{areaName}</td>
      <td className="px-6 py-4 font-medium text-neutral-900">{type}</td>
      <td
        className={`px-6 py-4 font-medium ${
          active ? 'text-green-700' : 'text-red-700'
        }`}
      >
        {active ? 'ACTIVO' : 'NO ACTIVO'}
      </td>
      <td className="px-6 py-4 text-right">
        <div className="flex gap-4 justify-end">
          <Link
            className="font-medium text-blue-600 hover:underline"
            href={`/dashboard/products/${name}`}
          >
            Editar
          </Link>
        </div>
      </td>
    </tr>
  )
}

export default ProductListItem
