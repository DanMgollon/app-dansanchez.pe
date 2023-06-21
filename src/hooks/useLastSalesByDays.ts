import type { LastSalesReportsDays } from '@/interfaces'
import type { ChartData, ChartOptions } from 'chart.js'
import { useMemo, useState } from 'react'

interface Props {
  lastSales: LastSalesReportsDays[]
}

interface ResponseData {
  selectDate: (date: string) => void
  dateSelected: string | undefined
  options: ChartOptions<'line'>
  data: ChartData<'line'>
}

export const useLastSalesByDays = ({ lastSales }: Props): ResponseData => {
  const [dateSelected, setDateSelected] = useState<string>()

  const selectDate = (date: string): void => {
    setDateSelected(date)
  }

  const labels = useMemo(() => {
    return lastSales.map((sale) =>
      Intl.DateTimeFormat('es-US', { dateStyle: 'short' }).format(
        new Date(sale.date)
      )
    )
  }, [lastSales])

  const salesData = useMemo(() => {
    return lastSales.map((sale) => sale.total)
  }, [lastSales])

  const options = useMemo(() => {
    return {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom' as const
        },
        title: {
          display: true,
          text: 'VENTAS POR MESES',
          font: {
            size: 14
          }
        },
        tooltip: {
          backgroundColor: '#082f49'
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

  return {
    selectDate,
    dateSelected,
    options,
    data
  }
}
