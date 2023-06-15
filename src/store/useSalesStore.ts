import type { Customer, ProductsSalesStore, SalePDF } from '@/interfaces'
import { getSalesService, newSaleService } from '@/services'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { useAuthStore } from './useAuthStore'
import { useUIStore } from './useUIStore'
import { useSaleSearchStore } from './useSeachSaleStore'

interface State {
  openModal: boolean
  productsSales: ProductsSalesStore[]
  sales: SalePDF[]
  loadingSales: boolean
  salesPage: number
  totalSales: number
  salesPerPage: number
  from: number
  to: number
  successfullySale: boolean
  PDFUrl: string | null
  errorAddProductSales: string | null
  isLoading: boolean
  errorSale: string | null
}
interface Actions {
  setOpenModal: (value: boolean) => void
  addProductSales: (product: ProductsSalesStore, maxStock: number) => void
  deleteProductSales: (id: string) => void
  updateAmount: (id: string, newSaleAmount: number) => void
  incrementAmoutByOne: (id: string) => void
  decrementAmoutByOne: (id: string) => void
  newSale: (customer: Customer) => void
  removeProductsSales: () => void
  removePDFUrl: () => void
  getSales: (customer?: string) => void
  changeSalesPage: (page: number) => void
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
    sales: [],
    loadingSales: false,
    salesPage: 1,
    salesPerPage: 20,
    totalSales: 0,
    from: 0,
    to: 0,
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
      set(() => ({ successfullySale: false }))
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
    },
    getSales: async (customer) => {
      set(() => ({ loadingSales: true }))
      const setSearchSale = useSaleSearchStore.getState().setSearchSale
      setSearchSale(customer as string)
      const { salesPerPage, salesPage } = get()
      try {
        const { sales, total, from, to } = await getSalesService({
          customer,
          page: salesPage
        })
        set(() => ({
          sales,
          totalSales: Math.ceil(total / salesPerPage),
          from,
          to
        }))
      } catch (error) {
        console.log(error)
      } finally {
        set(() => ({ loadingSales: false }))
      }
    },
    changeSalesPage: (newPage) => {
      set(() => ({ salesPage: newPage }))
    }
  }))
)
