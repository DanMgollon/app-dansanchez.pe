import type { Customer, ProductsSalesStore } from '@/interfaces'
import { newSaleService } from '@/services'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { useAuthStore } from './useAuthStore'
import { useUIStore } from './useUIStore'

interface State {
  openModal: boolean
  productsSales: ProductsSalesStore[]
  successfullySale: boolean
  PDFUrl: string | null
  errorAddProductSales: string | null
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
  newSale: (customer: Customer) => void
  removeProductsSales: () => void
  removePDFUrl: () => void
}

export const useSalesStore = create<State & Actions>()(
  devtools((set, get) => ({
    customer: null,
    openModal: false,
    productsSales: [],
    PDFUrl: null,
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
    newSale: async (customer) => {
      const products = get().productsSales
      const setIsModalSaleOpen = useUIStore.getState().setIsModalSaleOpen
      const user = useAuthStore.getState().user
      set(() => ({ isLoading: true }))
      try {
        const { PDFUrl } = await newSaleService({
          products,
          customer,
          userId: user!.id
        })
        set(() => ({ PDFUrl, successfullySale: true }))
        setIsModalSaleOpen(true)
      } catch (error) {
        set(() => ({ errorSale: 'Error el generar la venta' }))
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
    removePDFUrl: () => {
      set(() => ({ PDFUrl: null }))
    }
  }))
)
