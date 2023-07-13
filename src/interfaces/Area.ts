import type { Status } from '.'

export interface AreaLean {
  id: number
  name: string
}

export interface Area extends AreaLean {
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
