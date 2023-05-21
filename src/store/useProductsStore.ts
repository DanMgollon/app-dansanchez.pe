import { type Product } from '@/interfaces'
import { getProductsService } from '@/services'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface ProductsState {
  totalProducts: number
  products: Product[]
  errorMessage: string | null
  page: number
  totalPages: number
  productPorPage: number
  loadingProducts: boolean
  from: number
  to: number
}

interface Actions {
  getProducts: () => void
  changePage: (page: number) => void
}

export const useProductStore = create<ProductsState & Actions>()(
  devtools((set, get) => ({
    totalProducts: 0,
    products: [],
    errorMessage: null,
    totalPages: 0,
    page: 1,
    productPorPage: 20,
    loadingProducts: false,
    from: 0,
    to: 0,
    getProducts: async () => {
      const { page } = get()
      set(() => ({ loadingProducts: true }))
      try {
        const resp = await getProductsService(page)
        set(() => ({ products: resp.products }))
        set(() => ({ totalProducts: resp.total }))
        set((state) => ({
          totalPages: Math.floor(state.totalProducts / state.productPorPage)
        }))
        set(() => ({ from: resp.from, to: resp.to }))
      } catch (error) {
        const message = (error as Error).message
        set(() => ({ errorMessage: message }))
      } finally {
        set(() => ({ loadingProducts: false }))
      }
    },
    changePage: (page) => {
      set(() => ({ page }))
    }
  }))
)
