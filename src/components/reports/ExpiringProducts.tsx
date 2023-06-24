import type { FC } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { type ProductsToExpirate } from '@/interfaces'
import { LayoutGraphics } from '@/layout'
import { useExpiringProducts } from '@/hooks'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

interface Props {
  productsToExpirate: ProductsToExpirate[]
}

export const ExpiringProducts: FC<Props> = ({ productsToExpirate }) => {
  const { data, options } = useExpiringProducts({ products: productsToExpirate })
  return (
    <LayoutGraphics>
      <Bar data={data} options={options}/>
    </LayoutGraphics>
  )
}
