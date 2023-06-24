import type { Status, ProductTypes, Area } from './'

export interface Product extends ProductLean {
  areas: Area
  status: Status
  products_types: ProductTypes
}

export interface ProductSale {
  id: string
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
  id: string
  name: string
  price: number
  stock: number
  expiration_date?: string
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

export interface GetProductsRequest {
  page: number
  q?: string | undefined
  areas?: string | undefined
  status?: string | undefined
}

export interface MostSelledProductsI {
  name: string
  total: number
}

export interface ProductsToExpirate {
  id: string
  name: string
  days: number
  expiration_date: string
}
