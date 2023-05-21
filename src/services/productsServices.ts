import { ferreteriaApi } from '@/api'
import { type Product } from '@/interfaces'
import { type AxiosError } from 'axios'

interface GetProductsResponse {
  total: number
  products: Product[]
  from: number
  to: number
}

interface AreaError {
  message: string
}

export const getProductsService = async (page: number): Promise<GetProductsResponse> => {
  try {
    const { data } = await ferreteriaApi.get<GetProductsResponse>(`/products?page=${page}`)
    return {
      total: data.total,
      products: data.products,
      from: data.from,
      to: data.to
    }
  } catch (error) {
    const { response } = error as AxiosError<AreaError>
    const errorMessage = response?.data.message
    throw new Error(errorMessage)
  }
}
