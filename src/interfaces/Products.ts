import type { Status, ProductTypes, Area } from './'

export interface Product extends ProductLean {
  areas: Area
  status: Status
  products_types: ProductTypes
}

export interface ProductSale {
  id: number
  name: string
  price: number
  stock: number
  products_types: {
    type: string
  }
}
export interface ProductsSalesStore extends ProductSale {
  saleAmount: number
}
export interface ProductLean {
  id: number
  name: string
  price: number
  stock: number
}

export interface ProductsResponse {
  total: number
  products: Product[]
  from: number
  to: number
}

export interface SearchProductResponse {
  total: number
  products: Product[]
  from: number
  to: number
}

export interface SearchProduct {
  query: string
  areas: string
  status: string
  page: number
}
