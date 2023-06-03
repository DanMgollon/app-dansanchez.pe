import type { ProductsSalesStore } from './Products'

export interface Customer {
  customer: string
  dni: string
}

export interface NewSalePDFData {
  products: ProductsSalesStore[]
  customer: Customer
  date: string
}
export interface NewSaleRequest {
  products: ProductsSalesStore[]
  customer: Customer
  userId: number
}

export interface SalesResponseSuccess {
  PDFUrl: string
}

export interface SalesErrorResponse {
  message: string
}
