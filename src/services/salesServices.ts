import { ferreteriaApi } from '@/api'
import type {
  NewSaleResponseSuccess,
  NewSaleRequest,
  NewSaleResponseError,
  GetSalesResponseError,
  GetSalesResponseSuccess,
  GetSalesRequest
} from '@/interfaces'
import type { AxiosError } from 'axios'

export const newSaleService = async (
  newSaleData: NewSaleRequest
): Promise<NewSaleResponseSuccess> => {
  try {
    const { data } = await ferreteriaApi.post<NewSaleResponseSuccess>(
      '/sales',
      newSaleData
    )
    return data
  } catch (error) {
    const { response } = error as AxiosError<NewSaleResponseError>
    const errorMessage = response?.data.message
    throw new Error(errorMessage)
  }
}

export const getSalesService = async ({
  customer = '',
  page = 1
}: GetSalesRequest): Promise<GetSalesResponseSuccess> => {
  try {
    const { data } = await ferreteriaApi.get<GetSalesResponseSuccess>(`/sales?customer=${customer}&page=${page}`)
    return data
  } catch (error) {
    const { response } = error as AxiosError<GetSalesResponseError>
    const errorMessage = response?.data.message
    throw new Error(errorMessage)
  }
}
