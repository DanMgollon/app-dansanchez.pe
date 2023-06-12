import { getUserByDNI } from '@/services/DNIServices'
import { create } from 'zustand'

interface State {
  fullName: string | null
  dni: string | null
  errorDNI: string | null
  isSearching: boolean
}

interface Actions {
  searchUserDNI: (dniSearch: string) => void
  removeUserDNI: () => void
}

export const useUserDNI = create<State & Actions>()(set => ({
  fullName: null,
  dni: null,
  errorDNI: null,
  isSearching: false,
  searchUserDNI: async (dniSearch) => {
    set(() => ({ isSearching: true }))
    try {
      const { dni, fullName } = await getUserByDNI(dniSearch)
      set(() => ({ dni, fullName, errorDNI: null }))
    } catch (error) {
      const { message } = (error as Error)
      set(() => ({ errorDNI: message, dni: null, fullName: null }))
    } finally {
      set(() => ({ isSearching: false }))
    }
  },
  removeUserDNI: () => {
    set(() => ({ dni: null, fullName: null, errorDNI: null }))
  }
}))
