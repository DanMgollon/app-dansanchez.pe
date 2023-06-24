import type { ProductsToExpirate } from '@/interfaces'
import { formantDate } from '@/utils/formantDate'
import type { ChartData, ChartOptions } from 'chart.js'
import { useMemo } from 'react'

interface Props {
  products: ProductsToExpirate[]
}

interface ResponseData {
  options: ChartOptions<'bar'>
  data: ChartData<'bar'>
}

const options: ChartOptions<'bar'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'PRODUCTOS POR CADUCAR',
      font: {
        size: 16
      }
    }
  }
}

export const useExpiringProducts = ({ products }: Props): ResponseData => {
  const labels = useMemo(
    () =>
      products.map(
        (product) =>
          `${product.name} - ${formantDate(
            new Date(product.expiration_date),
            'dd/MM/yyyy'
          )}`
      ),
    [products]
  )
  const procutsData = useMemo(
    () => products.map((product) => product.days),
    []
  )
  const data: ChartData<'bar'> = {
    labels,
    datasets: [
      {
        label: 'Vence en (días)',
        data: procutsData,
        backgroundColor: 'rgba(29, 78, 216, 0.5)',
        datalabels: {
          labels: {
            title: null
          }
        }
      }
    ]
  }
  return {
    data,
    options
  }
}
