import { format, subDays } from 'date-fns'

export const lastSalesOptions = [
  {
    label: 'Últimos 7 dias',
    value: format(subDays(new Date(), 6), 'yyyy-MM-dd')
  },
  {
    label: 'Ultimos 15 dias',
    value: format(subDays(new Date(), 14), 'yyyy-MM-dd')
  },
  {
    label: 'Últimos 30 dias',
    value: format(subDays(new Date(), 29), 'yyyy-MM-dd')
  },
  {
    label: 'Últimos 90 dias',
    value: format(subDays(new Date(), 89), 'yyyy-MM-dd')
  }
]
