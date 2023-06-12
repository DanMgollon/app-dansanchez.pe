import { ferreteriaApi } from '@/api'
import type { UserDNIError, UserDNIResponse } from '@/interfaces'
import type { AxiosError } from 'axios'

export const getUserByDNI = async (dni: string): Promise<UserDNIResponse> => {
  try {
    const { data } = await ferreteriaApi.get<UserDNIResponse>(`/dnis/?dni=${dni}`)
    return data
  } catch (error) {
    const { response } = error as AxiosError<UserDNIError>
    const errorMessage = response?.data.message
    throw new Error(errorMessage)
  }
}
