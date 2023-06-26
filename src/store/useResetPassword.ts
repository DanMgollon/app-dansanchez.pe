import { create } from 'zustand'
import {
  resetPassword,
  sendEmailForResetPassword
} from '../services/passwordServices'

interface State {
  sendEmailerrorMessage: string | null
  sendEmailsucessMessage: string | null
  resetPasswordMessage: string | null
  isErrorResetPassword: boolean
  isRessetingPassword: boolean
  isLoading: boolean
}

interface Actions {
  sendEmailForResetPassword: () => void
  resetPassword: (idUser: number, token: string, password: string) => void
}

export const useResetPasswsord = create<State & Actions>()((set) => ({
  sendEmailerrorMessage: null,
  sendEmailsucessMessage: null,
  isLoading: false,
  resetPasswordMessage: null,
  isErrorResetPassword: false,
  isRessetingPassword: false,
  resetPassword: async (idUser, token, password) => {
    set(() => ({ isRessetingPassword: true }))
    try {
      const { message } = await resetPassword(idUser, token, password)
      set(() => ({ resetPasswordMessage: message, isErrorResetPassword: false }))
      setTimeout(() => {
        set(() => ({ resetPasswordMessage: null }))
      }, 5000)
    } catch (error) {
      const { message } = error as Error
      set(() => ({ resetPasswordMessage: message, isErrorResetPassword: true }))
      setTimeout(() => {
        set(() => ({ resetPasswordMessage: null }))
      }, 5000)
    } finally {
      set(() => ({ isRessetingPassword: false }))
    }
  },
  sendEmailForResetPassword: async () => {
    const ID_USER_ADMIN = 12
    set(() => ({ isLoading: true }))
    try {
      const { message } = await sendEmailForResetPassword(ID_USER_ADMIN)
      set({ sendEmailsucessMessage: message })
      setTimeout(() => {
        set(() => ({ sendEmailsucessMessage: null }))
      }, 10)
    } catch (error) {
      const { message } = error as Error
      set(() => ({ isErrorResetPassword: true }))
      set({ sendEmailerrorMessage: message })
      setTimeout(() => {
        set(() => ({ sendEmailerrorMessage: null }))
      }, 10)
    } finally {
      set({ isLoading: false })
    }
  }
}))
