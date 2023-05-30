
interface ProductsSalesRequest {
  productId: number
  amount: number
}

export interface SaleRequest {
  customer: string
  dni: string
  userId: number
  products: ProductsSalesRequest[]
}

export interface SaleResponseSuccessFully {
  message: string
}
