import type { Product } from '@/interfaces'
import type { FC } from 'react'
import ProductListItem from './ProductListItem'

interface Props {
  products: Product[]
}

export const ProductsList: FC<Props> = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <ProductListItem key={product.id} product={product}/>
      ))}
    </>
  )
}
