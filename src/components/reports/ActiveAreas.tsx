import { useMemo } from 'react'
import type { FC } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import type { ChartOptions, ChartData } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import type { TotalAreaReports } from '@/interfaces'
import ChartDataLabels from 'chartjs-plugin-datalabels'

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)

const options: ChartOptions<'pie'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'AREAS ACTIVAS E INACTIVAS',
      font: {
        size: 14
      }
    },
    tooltip: {
      backgroundColor: '#082f49'
    },
    datalabels: {
      formatter (value) {
        return `\n ${value as number}%`
      }
    }
  }
}

interface Props {
  areas: TotalAreaReports[]
}

export const ActiveAreas: FC<Props> = ({ areas }) => {
  const total = useMemo(
    () => areas.reduce((acu, curr) => acu + curr.total, 0),
    [areas]
  )

  const percentageOfActive = useMemo(() => {
    const activeTotal = areas
      .filter((areas) => areas.active)
      .reduce((acu, curr) => acu + curr.total, 0)
    return Math.round((activeTotal * 100) / total)
  }, [areas])

  const percentageOfInactive = useMemo(() => {
    const inactiveTotal = areas
      .filter((areas) => !areas.active)
      .reduce((acu, curr) => acu + curr.total, 0)
    return Math.round((inactiveTotal * 100) / total)
  }, [areas])

  const data: ChartData<'pie'> = {
    labels: ['Activos', 'Inactivos'],
    datasets: [
      {
        label: 'Porcentaje',
        data: [percentageOfActive, percentageOfInactive],
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1
      }
    ]
  }

  return (
    <div className='bg-white shadow px-4 py-2 rounded-xl'>
      <Pie data={data} options={options} />
    </div>
  )
}
