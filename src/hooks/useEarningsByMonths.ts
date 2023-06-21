import type { EarningsReportsByMonths } from '@/interfaces'
import type {
  ChartData,
  ChartOptions
} from 'chart.js'

import { useMemo, useState } from 'react'
interface Props {
  earnings: EarningsReportsByMonths[]
}

interface ResponseData {
  selectDate: (date: string) => void
  dateSelected: string | undefined
  options: ChartOptions<'line'>
  data: ChartData<'line'>
}

export const useEarningsByMonths = ({ earnings }: Props): ResponseData => {
  const [dateSelected, setDateSelected] = useState<string>()

  const selectDate = (date: string): void => {
    setDateSelected(date)
  }

  const labels = useMemo(() => {
    return earnings.map((sale) => sale.month)
  }, [earnings])

  const earningsData = useMemo(() => {
    return earnings.map((sale) => sale.total)
  }, [earnings])

  const options: ChartOptions<'line'> = useMemo(() => {
    return {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const
        },
        title: {
          display: true,
          text: 'GANANCIAS EN MESES',
          font: {
            size: 14
          }
        }
      }
    }
  }, [])

  const data: ChartData<'line'> = useMemo(() => {
    return {
      labels,
      datasets: [
        {
          fill: true,
          label: 'Total: ',
          data: earningsData,
          borderColor: 'rgba(77, 124, 15)',
          backgroundColor: 'rgba(74, 222, 128, 0.2)',
          datalabels: {
            labels: {
              title: null
            }
          }
        }
      ]
    }
  }, [earningsData])

  return {
    options,
    data,
    selectDate,
    dateSelected
  }
}
