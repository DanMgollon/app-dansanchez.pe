import type {
  EarningsReportsByMonths,
  LastSalesReportsDays,
  LastSalesReportsMonths
} from '@/interfaces'
import {
  getEarningReportsByMonthsServices,
  getSalesReportsByDaysService,
  getSalesReportsByMonthsService
} from '@/services'
import { create } from 'zustand'

interface State {
  lastSalesByDays: LastSalesReportsDays[]
  errorLastSalesByDays: string | null
  lastSalesByMonths: LastSalesReportsMonths[]
  errorLastSalesByMonths: string | null
  earningByMonths: EarningsReportsByMonths[]
  errorEarningsByMonths: string | null
}

interface Actions {
  loadLastSalesByDays: (startAt: string) => void
  loadLastSalesByMonths: (startAt: string) => void
  loadEarningByMonths: (startAt: string) => void
}

export const useReportsStore = create<State & Actions>()((set) => ({
  lastSalesByDays: [],
  errorLastSalesByDays: null,
  lastSalesByMonths: [],
  errorLastSalesByMonths: null,
  earningByMonths: [],
  errorEarningsByMonths: null,
  loadLastSalesByDays: async (startAt) => {
    set(() => ({ errorLastSalesByDays: null }))
    try {
      const resp = await getSalesReportsByDaysService(startAt)
      set({ lastSalesByDays: resp })
    } catch (error) {
      const { message } = error as Error
      set(() => ({ errorLastSalesByDays: message, lastSalesByDays: [] }))
    }
  },
  loadLastSalesByMonths: async (startAt) => {
    set(() => ({ errorLastSalesByMonths: null }))
    try {
      const resp = await getSalesReportsByMonthsService(startAt)
      set(() => ({ lastSalesByMonths: resp }))
    } catch (error) {
      const { message } = error as Error
      set(() => ({ errorLastSalesByMonths: message, lastSalesByMonths: [] }))
    }
  },
  loadEarningByMonths: async (startAt) => {
    set(() => ({ errorEarningsByMonths: null }))
    try {
      const resp = await getEarningReportsByMonthsServices(startAt)
      set(() => ({ earningByMonths: resp }))
    } catch (error) {
      const { message } = error as Error
      set(() => ({ errorLastSalesByMonths: message, lastSalesByMonths: [] }))
    }
  }
}))
