import { useMemo, type FC, useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { earningsByMonthsOptions } from '@/constants/eaningsByMonthsOptions'
import Select, { type SingleValue } from 'react-select'
import { useReportsStore } from '@/store'
import { useEarningsByMonths } from '@/hooks'
import { ErrorReports } from './ErrorReports'
import { DateReports } from './DateReports'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const EarningsByMonths: FC = () => {
  const { earningByMonths, errorEarningsByMonths, loadEarningByMonths } =
    useReportsStore((state) => ({
      earningByMonths: state.earningByMonths,
      errorEarningsByMonths: state.errorEarningsByMonths,
      loadEarningByMonths: state.loadEarningByMonths
    }))

  const defaultOptions = useMemo(() => earningsByMonthsOptions[0], [])

  const { options, data, selectDate, dateSelected } = useEarningsByMonths({
    earnings: earningByMonths
  })

  const handleSelectChange = (
    newValue: SingleValue<{ label: string, value: string }>
  ): void => {
    loadEarningByMonths(newValue?.value as string)
    selectDate(newValue?.value as string)
  }
  useEffect(() => {
    loadEarningByMonths(defaultOptions.value)
    selectDate(defaultOptions.value)
  }, [])

  return (
    <div className="w-full bg-white shadow px-8 py-2 rounded-lg h-full">
      <div className="mt-4 mb-5">
        <div className="mb-2">
          <DateReports previousDate={dateSelected as string} />
        </div>
        <Select
          options={earningsByMonthsOptions}
          defaultValue={defaultOptions}
          onChange={handleSelectChange}
        />
      </div>
      <Line options={options} data={data} />
      {errorEarningsByMonths !== null && (
        <ErrorReports message={errorEarningsByMonths} />
      )}
    </div>
  )
}
