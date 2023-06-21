import { useMemo, useEffect } from 'react'
import type { FC } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import Select, { type SingleValue } from 'react-select'
import { useReportsStore } from '@/store'
import { shallow } from 'zustand/shallow'
import { lastSalesOptions } from '@/constants'
import { useLastSalesByDays } from '@/hooks'
import { ErrorReports } from './ErrorReports'
import { DateReports } from './DateReports'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartDataLabels
)

export const LastSalesByDays: FC = () => {
  const { loadLastSalesByDays, lastSalesByDays, errorLastSalesByDays } =
    useReportsStore(
      (state) => ({
        loadLastSalesByDays: state.loadLastSalesByDays,
        lastSalesByDays: state.lastSalesByDays,
        errorLastSalesByDays: state.errorLastSalesByDays
      }),
      shallow
    )

  const { data, dateSelected, selectDate, options } = useLastSalesByDays({
    lastSales: lastSalesByDays
  })

  const defaultSelect = useMemo(() => lastSalesOptions[0], [])

  const handleChangeSelect = (
    newValue: SingleValue<{ label: string, value: string }>
  ): void => {
    loadLastSalesByDays(newValue?.value as string)
    selectDate(newValue?.value as string)
  }

  useEffect(() => {
    loadLastSalesByDays(defaultSelect.value)
    selectDate(defaultSelect.value)
  }, [])

  return (
    <div className="w-full bg-white shadow px-8 py-2 rounded-lg h-full">
      <div className="mt-4 mb-5">
        <div className='mb-2'>
          <DateReports previousDate={dateSelected as string}/>
        </div>
        <Select
          options={lastSalesOptions}
          defaultValue={lastSalesOptions[0]}
          onChange={handleChangeSelect}
        />
      </div>
      <Line options={options} data={data} />
      {errorLastSalesByDays !== null && (
        <ErrorReports message={errorLastSalesByDays} />
      )}
    </div>
  )
}
