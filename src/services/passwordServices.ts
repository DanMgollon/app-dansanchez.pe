import { ferreteriaApi } from '@/api'
import type {
  ResetPasswordError,
  ResetPasswordSuccess,
  SendEmailResetPasswordError,
  SendEmailResetPasswordSuccess
} from '@/interfaces/ResetPassword'
import type { AxiosError } from 'axios'

export const sendEmailForResetPassword = async (
  id: number
): Promise<SendEmailResetPasswordSuccess> => {
  try {
    const { data } = await ferreteriaApi.get<SendEmailResetPasswordSuccess>(
      `/reset-password/${id}`
    )
    return data
  } catch (error) {
    const { response } = error as AxiosError<SendEmailResetPasswordError>
    throw new Error(response?.data.message)
  }
}

export const resetPassword = async (
  idUser: number,
  token: string,
  password: string
): Promise<ResetPasswordSuccess> => {
  try {
    const { data } = await ferreteriaApi.post<ResetPasswordSuccess>(`/reset-password/${idUser}`, {
      token,
      password
    })
    return data
  } catch (error) {
    const { response } = error as AxiosError<ResetPasswordError>
    throw new Error(response?.data.message)
  }
}
