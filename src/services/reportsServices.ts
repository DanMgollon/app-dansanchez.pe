import { ferreteriaApi } from '@/api'
import type { EarningsReportsByMonths, GetEarningsReportsByMonthsResponseError, GetLastSalesReportsDaysResponseError, GetLastSalesReportsMonthResponseError, LastSalesReportsDays, LastSalesReportsMonths } from '@/interfaces'
import { type AxiosError } from 'axios'

export const getSalesReportsByDaysService = async (startAt: string): Promise<LastSalesReportsDays[]> => {
  try {
    const { data } = await ferreteriaApi.get<LastSalesReportsDays[]>(`/reports/sales/days?startAt=${startAt}`)
    return data
  } catch (error) {
    const { response } = error as AxiosError<GetLastSalesReportsDaysResponseError>
    const { message } = response!.data
    throw new Error(message)
  }
}

export const getSalesReportsByMonthsService = async (startAt: string): Promise<LastSalesReportsMonths[]> => {
  try {
    const { data } = await ferreteriaApi.get<LastSalesReportsMonths[]>(`/reports/sales/months?startAt=${startAt}`)
    return data
  } catch (error) {
    const { response } = error as AxiosError<GetLastSalesReportsMonthResponseError>
    const { message } = response!.data
    throw new Error(message)
  }
}

export const getEarningReportsByMonthsServices = async (startAt: string): Promise<EarningsReportsByMonths[]> => {
  try {
    const { data } = await ferreteriaApi.get<EarningsReportsByMonths[]>(`/reports/earnings?startAt=${startAt}`)
    return data
  } catch (error) {
    const { response } = error as AxiosError<GetEarningsReportsByMonthsResponseError>
    const { message } = response!.data
    throw new Error(message)
  }
}
