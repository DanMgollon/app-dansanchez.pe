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
import type { MostSelledProductsI } from '@/interfaces'
import { useMostSelledProducts } from '@/hooks/useMostSelledProducts'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

interface Props {
  products: MostSelledProductsI[]
}

export const MostSelledProducts: FC<Props> = ({ products }) => {
  const { data, options } = useMostSelledProducts({ products })

  return (
    <div className='w-full bg-white shadow px-8 py-2 rounded-lg h-full'>
      <Bar data={data} options={options}/>
    </div>
  )
}
