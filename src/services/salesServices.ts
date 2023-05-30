import { ferreteriaApi } from '@/api'
import type { SaleResponseSuccessFully, SaleRequest } from '@/interfaces/Sales'

export const newSaleService = async (sale: SaleRequest): Promise<any> => {
  try {
    const data = await ferreteriaApi.post<SaleResponseSuccessFully>('/sales', sale)
    return data
  } catch (error) {
    console.log(error)
  }
}
