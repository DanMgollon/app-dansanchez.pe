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

export const createProductService = async (product: Omit<Product, 'id'>): Promise<Product> => {
  try {
    const { data } = await ferreteriaApi.post<Product>('/products', product)
    return data
  } catch (error) {
    const { response } = error as AxiosError<AreaError>
    const errorMessage = response?.data.message
    throw new Error(errorMessage)
  }
}

export const updateProductService = async (product: Product): Promise<Product> => {
  try {
    const { data } = await ferreteriaApi.put<Product>(`/products/${product.id}`, product)
    return data
  } catch (error) {
    const { response } = error as AxiosError<AreaError>
    const errorMessage = response?.data.message
    throw new Error(errorMessage)
  }
}
