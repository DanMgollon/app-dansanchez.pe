import { ferreteriaApi } from '@/api'
import type { Area } from '@/interfaces'

export const getAreasService = async (): Promise<Area[]> => {
  try {
    const { data } = await ferreteriaApi.get<Area[]>('/areas')
    return data
  } catch (error) {
    throw new Error('Error al obtener las areas')
  }
}

export const updateAreaService = async (newArea: Area): Promise<Area> => {
  try {
    const { id } = newArea
    const { data } = await ferreteriaApi.put<{ area: Area }>(`/areas/${id}`, newArea)
    return data.area
  } catch (error) {
    throw new Error('Error al obtener las areas')
  }
}

export const createAreaService = async (name: string, active: boolean): Promise<Area> => {
  try {
    const { data } = await ferreteriaApi.post<Area>('/areas', { name, active })
    return data
  } catch (error) {
    throw new Error('Error al obtener las areas')
  }
}

export const deleteAreaService = async (id: number): Promise<Area> => {
  try {
    const { data } = await ferreteriaApi.delete(`/areas/${id}`)
    return data
  } catch (error) {
    throw new Error('Error al obtener elimiar un area')
  }
}
