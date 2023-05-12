import type { User } from '@/interfaces'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface AuthState {
  user: User | null
  isLoggedIn: boolean
}
interface Actions {
  loginUser: (user: User) => void
  logout: () => void
}

export const useAuthStore = create<AuthState & Actions>()(
  devtools((set) => ({
    user: null,
    isLoggedIn: false,
    loginUser: (user) => {
      set(() => ({ user, isLoggedIn: true }))
    },
    logout: () => {
      set(() => ({ user: null, isLoggedIn: false }))
    }
  }))
)
