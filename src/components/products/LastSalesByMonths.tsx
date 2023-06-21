import { lastSalesByMonthsOptions } from '@/constants'
import { useMemo, type FC, useEffect } from 'react'
import Select, { type SingleValue } from 'react-select'
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
import { useLastSalesByMonths } from '@/hooks'
import { useReportsStore } from '@/store'
import { shallow } from 'zustand/shallow'
import { DateReports, ErrorReports } from '../reports'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

export const LastSalesByMonths: FC = () => {
  const { lastSalesByMonths, errorLastSalesByMonths, loadLastSalesByMonths } =
    useReportsStore(
      (state) => ({
        lastSalesByMonths: state.lastSalesByMonths,
        errorLastSalesByMonths: state.errorLastSalesByMonths,
        loadLastSalesByMonths: state.loadLastSalesByMonths
      }),
      shallow
    )
  const { data, options, dateSelected, selectDate } = useLastSalesByMonths({
    lastSales: lastSalesByMonths
  })

  const defaultSelect = useMemo(() => lastSalesByMonthsOptions[0], [])

  const handleChangeSelect = (
    newValue: SingleValue<{ label: string, value: string }>
  ): void => {
    loadLastSalesByMonths(newValue?.value as string)
    selectDate(newValue?.value as string)
  }

  useEffect(() => {
    loadLastSalesByMonths(defaultSelect.value)
    selectDate(defaultSelect.value)
  }, [])

  return (
    <div className="w-full bg-white shadow px-8 py-2 rounded-lg">
      <div className="mt-4 mb-6">
        <div className='mb-2'>
          <DateReports previousDate={dateSelected as string}/>
        </div>
        <Select
          options={lastSalesByMonthsOptions}
          defaultValue={defaultSelect}
          onChange={handleChangeSelect}
        />
      </div>
      <Line options={options} data={data} />
      {errorLastSalesByMonths !== null && (
        <ErrorReports message={errorLastSalesByMonths} />
      )}
    </div>
  )
}
