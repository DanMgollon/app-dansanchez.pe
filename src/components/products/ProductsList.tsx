import type { Product } from '@/interfaces'
import type { FC } from 'react'
import ProductListItem from './ProductListItem'
import { LoadingTableData, Table } from '../table'

const HEAD_ROWS = [
  'Producto',
  'Precio',
  'Stock',
  'Area',
  'Tipo',
  'Estado',
  // 'F. VENCIMIENTO',
  'Acciones'
]
interface Props {
  products: Product[]
  loadingProducts: boolean
}

export const ProductsList: FC<Props> = ({ products, loadingProducts }) => {
  return (
    <Table heads={HEAD_ROWS}>
      {loadingProducts
        ? <LoadingTableData />
        : (
        <>
          {products.map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </>
          )}
    </Table>
  )
}
