import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface State {
  searchProduct: string | undefined
  areas: string | undefined
  status: string | undefined
}

interface Actions {
  setSearchProduct: (
    searchProduct: string | undefined,
    areas: string | undefined,
    status: string | undefined
  ) => void
}

export const useSearchProductStore = create<State & Actions>()(devtools((set) => ({
  areas: undefined,
  searchProduct: undefined,
  status: undefined,
  setSearchProduct: (
    searchProduct,
    areas,
    status
  ) => {
    set(() => ({
      searchProduct,
      areas,
      status
    }))
  }
})))
