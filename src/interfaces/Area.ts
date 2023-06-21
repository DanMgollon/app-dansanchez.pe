import type { Status } from '.'

export interface Area {
  id: number
  name: string
  status: Status
}

export interface QuantityProductsArea {
  area: string
  total: number
}

export interface TotalAreaReports {
  active: boolean
  total: number
}
