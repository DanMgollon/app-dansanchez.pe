import { format } from 'date-fns'

export const formantDate = (date: Date, formant: string): string => {
  return format(date, formant)
}
