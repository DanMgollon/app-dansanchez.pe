import type { ProductsSalesStore } from './Products'

export interface Customer {
  customer: string
  dni: string
}

export interface Sale {
  id: number
  customer: string
  dni: string
  date: Date
}

export interface SalePDF extends Sale {
  pdfs: {
    url: string
  }
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

export interface NewSaleResponseSuccess {
  PDFUrl: string
}

export interface NewSaleResponseError {
  message: string
}

export interface GetSalesResponseError {
  message: string
}
export interface GetSalesResponseSuccess {
  sales: SalePDF[]
  total: number
  from: number
  to: number
}

export interface GetSalesRequest {
  customer?: string
  page?: number
}
