import { create } from 'zustand'

interface State {
  customer?: string
}

interface Actions {
  setSearchSale: (customer: string) => void
}

export const useSaleSearchStore = create<State & Actions>((set) => ({
  customer: '',
  setSearchSale: (customer) => {
    set(() => ({ customer }))
  }
}))
