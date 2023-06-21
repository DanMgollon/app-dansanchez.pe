import { format, startOfMonth, subMonths } from 'date-fns'

export const earningsByMonthsOptions = [
  {
    label: 'Últimos 3 meses',
    value: format(startOfMonth(subMonths(new Date(), 2)), 'yyyy-MM-dd')
  },
  {
    label: 'Últimos 6 meses',
    value: format(startOfMonth(subMonths(new Date(), 5)), 'yyyy-MM-dd')
  },
  {
    label: 'Últimos 9 meses',
    value: format(startOfMonth(subMonths(new Date(), 8)), 'yyyy-MM-dd')
  },
  {
    label: 'Últimos 12 meses',
    value: format(startOfMonth(subMonths(new Date(), 11)), 'yyyy-MM-dd')
  },
  {
    label: 'Últimos 24 meses',
    value: format(startOfMonth(subMonths(new Date(), 23)), 'yyyy-MM-dd')
  }
]
