import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { Area } from '../interfaces/Area'

interface UIState {
  openModalArea: boolean
  activeArea: Area | null
}

interface UIActions {
  setModalArea: (value: boolean) => void
  setActiveArea: (area: Area) => void
  clearActiveArea: () => void
}

export const useUIStore = create<UIState & UIActions>()(devtools((set) => ({
  openModalArea: false,
  activeArea: null,
  setModalArea: (value) => {
    set(() => ({ openModalArea: value }))
  },
  setActiveArea: (area) => {
    set(() => ({ openModalArea: true, activeArea: area }))
  },
  clearActiveArea: () => {
    set(() => ({ openModalArea: false, activeArea: null }))
  }
}))
)
