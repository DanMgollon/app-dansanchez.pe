import { DashboardLayout } from '@/layout'
import type { FC } from 'react'
import { useProductStore } from '@/store'
import { ProductsList } from '@/components/products/ProductsList'
import { LodingProducts, PaginateProducts } from '@/components/products'

const ProductsPage: FC = () => {
  const products = useProductStore((state) => state.products)

  const loadingProducts = useProductStore((state) => state.loadingProducts)
  const totalProducts = useProductStore((state) => state.totalProducts)
  const from = useProductStore((state) => state.from)
  const to = useProductStore((state) => state.to)

  return (
    <DashboardLayout>
      <header className="mb-8">
        <h3 className="text-3xl font-extrabold">
          Listando <span className="text-blue-500">Productos</span>
        </h3>
      </header>
      <div className="flex justify-between items-center mb-5 ">
        <div>
          <p className="font-medium text-zinc-500">
            Viendo{' '}
            <span className="text-black font-semibold">
              {from}-{to}
            </span>{' '}
            de <span className="text-black font-semibold">{totalProducts}</span>
          </p>
        </div>
      <PaginateProducts />
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-neutral-800">
            <tr>
              <th scope="col" className="px-6 py-3">
                Producto
              </th>
              <th scope="col" className="px-6 py-3">
                Precio
              </th>
              <th scope="col" className="px-6 py-3">
                Stock
              </th>
              <th scope="col" className="px-6 py-3">
                Area
              </th>
              <th scope="col" className="px-6 py-3">
                Tipo
              </th>
              <th scope="col" className="px-6 py-3">
                Estado
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          {
            loadingProducts
              ? <LodingProducts />
              : <ProductsList products={products} />
          }
        </table>
      </div>
    </DashboardLayout>
  )
}

export default ProductsPage
