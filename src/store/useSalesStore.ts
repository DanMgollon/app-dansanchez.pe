import type { ProductsSalesStore, SaleRequest } from '@/interfaces'
import { newSaleService } from '@/services'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { useAuthStore } from './useAuthStore'
import type { Customer } from '../interfaces/Products'

interface State {
  customer: Customer | null
  openModal: boolean
  productsSales: ProductsSalesStore[]
  errorAddProductSales: string | null
  successfullySale: boolean
  isLoading: boolean
  errorSale: string | null
}
interface Actions {
  setOpenModal: (value: boolean) => void
  addProductSales: (product: ProductsSalesStore, maxStock: number) => void
  deleteProductSales: (id: number) => void
  updateAmount: (id: number, newSaleAmount: number) => void
  incrementAmoutByOne: (id: number) => void
  decrementAmoutByOne: (id: number) => void
  newSale: (customer: string, dni: string) => void
  removeProductsSales: () => void
  removeCustomer: () => void
}

export const useSalesStore = create<State & Actions>()(
  devtools((set, get) => ({
    customer: null,
    openModal: false,
    productsSales: [],
    activeProductSales: null,
    errorAddProductSales: null,
    isLoading: false,
    successfullySale: false,
    errorSale: null,
    setOpenModal: (value) => {
      set(() => ({ openModal: value }))
    },
    addProductSales: (product) => {
      const productsSales = get().productsSales
      const exitsProduct = productsSales.find((item) => item.id === product.id)

      if (exitsProduct !== undefined) {
        const newState = structuredClone(productsSales)
        const index = newState.findIndex((item) => item.id === product.id)
        newState[index].saleAmount += product.saleAmount
        set(() => ({ productsSales: newState }))
        return
      }

      set((state) => ({
        productsSales: [...state.productsSales, product]
      }))
    },
    deleteProductSales: (id) => {
      const productsSales = get().productsSales
      const newState = productsSales.filter((item) => item.id !== id)
      set(() => ({ productsSales: newState }))
    },
    updateAmount: (id, newSaleAmount) => {
      const productsSales = get().productsSales
      const newState = structuredClone(productsSales)
      const index = productsSales.findIndex((item) => item.id === id)
      newState[index].saleAmount = newSaleAmount
      set(() => ({ productsSales: newState }))
    },
    incrementAmoutByOne: (id) => {
      const productsSales = get().productsSales
      const newState = structuredClone(productsSales)
      const index = productsSales.findIndex((item) => item.id === id)
      newState[index].saleAmount += 1
      set(() => ({ productsSales: newState }))
    },
    decrementAmoutByOne: (id) => {
      const productsSales = get().productsSales
      const newState = structuredClone(productsSales)
      const index = productsSales.findIndex((item) => item.id === id)
      newState[index].saleAmount -= 1
      set(() => ({ productsSales: newState }))
    },
    newSale: async (customer, dni) => {
      set(() => ({ isLoading: true }))
      try {
        const userId = useAuthStore.getState().user!.id
        const productsSales = get().productsSales
        const products = productsSales.map((item) => ({
          productId: item.id,
          amount: item.saleAmount
        }))
        const sales: SaleRequest = {
          customer,
          dni,
          userId,
          products
        }
        await newSaleService(sales)
        set(() => ({ customer: { customer, dni } }))
        set(() => ({ successfullySale: true }))
        setTimeout(() => {
          set(() => ({ successfullySale: false }))
        }, 50)
      } catch (error) {
        const message = (error as Error).message
        set(() => ({ errorSale: message }))
        setTimeout(() => {
          set(() => ({ errorSale: null }))
        }, 50)
      } finally {
        set(() => ({ isLoading: false }))
      }
    },
    removeProductsSales: () => {
      set(() => ({ productsSales: [] }))
    },
    removeCustomer: () => {
      set(() => ({ customer: null }))
    }

  }))
)
