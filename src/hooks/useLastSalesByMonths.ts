import type { LastSalesReportsMonths } from '@/interfaces/Sales'
import { type ChartData, type ChartOptions } from 'chart.js'
import { useMemo, useState } from 'react'

interface Props {
  lastSales: LastSalesReportsMonths[]
}

interface ResponseData {
  selectDate: (date: string) => void
  dateSelected: string | undefined
  options: ChartOptions<'line'>
  data: ChartData<'line'>
}

export const useLastSalesByMonths = ({ lastSales }: Props): ResponseData => {
  const [dateSelected, setDateSelected] = useState<string>()

  const labels = useMemo(() => {
    return lastSales.map((sale) => sale.month)
  }, [lastSales])

  const salesData = useMemo(() => {
    return lastSales.map((sale) => sale.total)
  }, [lastSales])

  const options: ChartOptions<'line'> = useMemo(() => {
    return {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const
        },
        title: {
          display: true,
          text: 'VENTAS EN MESES',
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
          data: salesData,
          borderColor: '#60a5fa',
          backgroundColor: 'rgba(29, 78, 216, 0.3)',
          datalabels: {
            labels: {
              title: null
            }
          }
        }
      ]
    }
  }, [salesData])

  const selectDate = (date: string): void => {
    setDateSelected(date)
  }

  return {
    dateSelected,
    selectDate,
    options,
    data
  }
}
