import type { MostSelledProductsI } from '@/interfaces'
import { type ChartOptions, type ChartData } from 'chart.js'
import { useMemo } from 'react'

interface Props {
  products: MostSelledProductsI[]
}

interface ResponseData {
  data: ChartData<'bar'>
  options: ChartOptions<'bar'>
}

export const useMostSelledProducts = ({ products }: Props): ResponseData => {
  const labels = useMemo(() => {
    return products.map(product => product.name)
  }, [products])

  const productsData = useMemo(() => {
    return products.map((product) => product.total)
  }, [products])

  const data: ChartData<'bar'> = {
    labels,
    datasets: [
      {
        label: 'Producto más vendidos',
        data: productsData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)'
        ],
        borderWidth: 1

      }
    ]
  }
  const options: ChartOptions<'bar'> = useMemo(() => {
    return {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const
        },
        title: {
          display: true,
          text: 'PRODUCTOS MAS VENDIDOS',
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

  return {
    data,
    options
  }
}
