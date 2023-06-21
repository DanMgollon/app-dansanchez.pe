import { useMemo, type FC } from 'react'

interface Props {
  previousDate: string
}

export const DateReports: FC<Props> = ({ previousDate }) => {
  const timeFormant = useMemo(() => {
    return Intl.DateTimeFormat('es-US', {
      dateStyle: 'medium'
    })
  }, [])

  const previousDateAsString = useMemo(() => {
    if (previousDate === undefined) return ''
    return timeFormant.format(new Date(previousDate))
  }, [previousDate])

  const todayAsString = useMemo(() => {
    return timeFormant.format(new Date())
  }, [])

  return (
    <h3 className=" text-gray-400 font-medium">
      {previousDateAsString} - {todayAsString}
    </h3>
  )
}
