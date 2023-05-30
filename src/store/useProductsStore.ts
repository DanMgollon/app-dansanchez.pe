import { type SearchProduct, type Product } from '@/interfaces'
import {
  createProductService,
  getProductsService,
  searchProductsService,
  updateProductService
} from '@/services'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface ProductsState {
  totalProducts: number
  isSearch: boolean
  products: Product[]
  productSearch: Product | null
  errorMessage: string | null
  page: number
  totalPages: number
  productPorPage: number
  loadingProducts: boolean
  from: number
  to: number
  isCreated: boolean
  isUpdated: boolean
  isLoading: boolean
}

interface Actions {
  getProducts: () => void
  changePage: (page: number) => void
  createProduct: (product: Omit<Product, 'id'>) => void
  updateProduct: (product: Product) => void
  searchProduct: ({
    query,
    areas,
    status
  }: Omit<SearchProduct, 'page'>) => void
  setIsSearch: (isSearch: boolean) => void
}

export const useProductStore = create<ProductsState & Actions>()(
  devtools((set, get) => ({
    totalProducts: 0,
    products: [],
    errorMessage: null,
    page: 0,
    totalPages: 0,
    productPorPage: 20,
    loadingProducts: false,
    from: 0,
    to: 0,
    isCreated: false,
    isUpdated: false,
    isLoading: false,
    productSearch: null,
    isSearch: false,
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
        set(() => ({ errorMessage: null }))
      } finally {
        set(() => ({ loadingProducts: false }))
      }
    },
    createProduct: async (product) => {
      set(() => ({ isLoading: true }))
      try {
        const productCreated = await createProductService(product)
        set(({ products }) => ({ products: [...products, productCreated] }))
        set(() => ({ isCreated: true }))
        setTimeout(() => {
          set(() => ({ isCreated: false }))
        }, 50)
      } catch (error) {
        const message = (error as Error).message
        set(() => ({ errorMessage: message }))
        set(() => ({ errorMessage: null }))
      } finally {
        set(() => ({ isLoading: false }))
      }
    },
    updateProduct: async (product) => {
      set(() => ({ isLoading: true }))
      try {
        const products = get().products
        await updateProductService(product)
        const index = products.findIndex((p) => p.id === product.id)
        products[index] = product
        set(() => ({ isUpdated: true }))
        setTimeout(() => {
          set(() => ({ isUpdated: false }))
        }, 50)
      } catch (error) {
        const message = (error as Error).message
        set(() => ({ errorMessage: message }))
        set(() => ({ errorMessage: null }))
      } finally {
        set(() => ({ isLoading: false }))
      }
    },
    changePage: (page) => {
      set(() => ({ page }))
    },
    searchProduct: async ({ query, areas, status }) => {
      const page = get().page
      set(() => ({ isLoading: true }))
      try {
        const { total, products, from, to } = await searchProductsService({
          query,
          areas,
          status,
          page
        })
        set(() => ({ totalProducts: total }))
        set(() => ({
          totalPages: Math.floor(total / get().productPorPage),
          products,
          from,
          to
        }))
      } catch (error) {
        const message = (error as Error).message
        set(() => ({ errorMessage: message }))
        set(() => ({ errorMessage: null }))
      } finally {
        set(() => ({ isLoading: false }))
      }
    },
    setIsSearch: (value) => {
      set(() => ({ isSearch: value }))
    }
  }))
)
