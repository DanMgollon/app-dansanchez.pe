import type { QuantityProductsArea } from '@/interfaces'
import { useMemo, type FC } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import type { ChartOptions, ChartData } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

interface Props {
  areas: QuantityProductsArea[]
}

const options: ChartOptions<'bar'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'CANTIDAD DE PRODUCTOS POR AREA',
      font: {
        size: 14
      }
    },
    tooltip: {
      backgroundColor: '#082f49'
    }
  }
}

export const QuantityProductsAreas: FC<Props> = ({ areas }) => {
  const labels = useMemo(() => areas?.map(area => area.area), [])

  const data: ChartData<'bar'> = {
    labels,
    datasets: [
      {
        label: 'Cantidad',
        data: areas?.map(area => area.total),
        backgroundColor: 'rgba(29, 78, 216, 0.2)',
        borderColor: 'rgb(29, 78, 216)',
        borderRadius: 5,
        borderWidth: 1
      }
    ]
  }

  return (
    <div className='w-full bg-white shadow px-8 py-2 rounded-lg'>
      <Bar options={options} data={data} />
    </div>
  )
}
