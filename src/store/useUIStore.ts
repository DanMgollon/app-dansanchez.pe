import { create } from 'zustand'

interface UIState {
  isModalSaleOpen: boolean
}

interface Actions {
  setIsModalSaleOpen: (value: boolean) => void
}

export const useUIStore = create<UIState & Actions>()((set) => ({
  isModalSaleOpen: false,
  setIsModalSaleOpen: (value) => {
    set(() => ({ isModalSaleOpen: value }))
  }
}))
