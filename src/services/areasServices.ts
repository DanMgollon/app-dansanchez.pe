import { ferreteriaApi } from '@/api'
import type { Area } from '@/interfaces'
import { type AxiosError } from 'axios'

interface AreaError {
  message: string
}

export const getAreasService = async (): Promise<Area[]> => {
  try {
    const { data } = await ferreteriaApi.get<Area[]>('/areas')
    return data
  } catch (error) {
    const { response } = error as AxiosError<AreaError>
    const errorMessage = response?.data.message
    throw new Error(errorMessage)
  }
}

export const updateAreaService = async (newArea: Area): Promise<Area> => {
  try {
    const { id } = newArea
    const { data } = await ferreteriaApi.put<{ area: Area }>(`/areas/${id}`, newArea)
    return data.area
  } catch (error) {
    const { response } = error as AxiosError<AreaError>
    const errorMessage = response?.data.message
    throw new Error(errorMessage)
  }
}

export const createAreaService = async (name: string, active: boolean): Promise<Area> => {
  try {
    const { data } = await ferreteriaApi.post<Area>('/areas', { name, active })
    return data
  } catch (error) {
    const { response } = error as AxiosError<AreaError>
    const errorMessage = response?.data.message
    throw new Error(errorMessage)
  }
}

export const deleteAreaService = async (id: number): Promise<Area> => {
  try {
    const { data } = await ferreteriaApi.delete(`/areas/${id}`)
    return data
  } catch (error) {
    // tipa el error con la propiedad message de tipo string
    const { response } = error as AxiosError<AreaError>
    const errorMessage = response?.data.message
    throw new Error(errorMessage)
  }
}
