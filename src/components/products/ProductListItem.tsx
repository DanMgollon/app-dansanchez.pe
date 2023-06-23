import type { Product } from '@/interfaces'
import Link from 'next/link'
import { useMemo, type FC } from 'react'
import { TableRow, TabelCell } from '@/components/table'
import { format } from 'date-fns'

interface Props {
  product: Product
}

const ProductListItem: FC<Props> = ({ product }) => {
  const {
    id,
    name,
    stock,
    areas,
    status,
    products_types: productsTypes,
    price,
    expiration_date: expirationDate
  } = product

  const { name: areaName } = areas
  const { active } = status
  const { type } = productsTypes

  const dateFormatted = useMemo(() => {
    if (expirationDate === null) return 'SF'
    return format(new Date(expirationDate as string), 'dd/MM/yyyy')
  }, [expirationDate])

  return (
    <TableRow>
      <TabelCell scope="row" className="font-medium text-gray-800">
        {name}
      </TabelCell>
      <TabelCell>
        <span className="text-gray-600">S/ {price}</span>
      </TabelCell>
      <TabelCell>
        <span className="text-gray-600">{stock}</span>
      </TabelCell>
      <TabelCell>
        <span className="text-gray-600">{areaName}</span>
      </TabelCell>
      <TabelCell>
        <span className="text-gray-600">{type}</span>
      </TabelCell>
      <TabelCell>
        <span className={`${active ? 'text-green-500' : 'text-red-500'}`}>
          {active ? 'ACTIVO' : 'NO ACTIVO'}
        </span>
      </TabelCell>
      <TabelCell>
        <span className="text-gray-600">{ dateFormatted }</span>
      </TabelCell>
      <TabelCell className="text-right">
        <div className="flex gap-4 justify-end">
          <Link
            className="font-medium text-blue-600 hover:underline"
            href={`/dashboard/productos/${id}`}
          >
            Editar
          </Link>
        </div>
      </TabelCell>
    </TableRow>
  )
}

export default ProductListItem
