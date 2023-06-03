import { ferreteriaApi } from '@/api'
import type { SalesResponseSuccess, NewSaleRequest, SalesErrorResponse } from '@/interfaces'
import type { AxiosError } from 'axios'

export const newSaleService = async (newSaleData: NewSaleRequest): Promise<SalesResponseSuccess> => {
  try {
    const { data } = await ferreteriaApi.post<SalesResponseSuccess>('/sales', newSaleData)
    return data
  } catch (error) {
    const { response } = error as AxiosError<SalesErrorResponse>
    const errorMessage = response?.data.message
    throw new Error(errorMessage)
  }
}
