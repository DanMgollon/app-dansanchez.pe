import { type ProductsSalesStore } from '@/interfaces'
import { type FC } from 'react'
import SalesProductsListItem from './SalesProductsListItem'

interface Props {
  products: ProductsSalesStore[]
}

const SalesProductsList: FC<Props> = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <SalesProductsListItem key={product.id} product={product}/>
      ))}
    </>
  )
}

export default SalesProductsList
