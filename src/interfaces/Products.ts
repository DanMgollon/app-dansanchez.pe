import type { Status, ProductTypes, Area } from './'

export interface Product {
  id: number
  name: string
  price: number
  stock: number
  areas: Area
  status: Status
  products_types: ProductTypes
}
