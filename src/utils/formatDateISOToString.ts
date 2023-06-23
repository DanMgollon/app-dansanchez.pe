import { parseISO, format } from 'date-fns'

export const formatDateISOTOString = (date: string): string => {
  const utcDate = parseISO(date)
  const formattedDate = format(
    new Date(utcDate.valueOf() + utcDate.getTimezoneOffset() * 60 * 1000),
    'dd/MM/yyyy'
  )
  return formattedDate
}
