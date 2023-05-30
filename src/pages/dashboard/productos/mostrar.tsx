import { DashboardLayout } from '@/layout'
import type { FC } from 'react'
import { useProductStore } from '@/store'
import { ProductsList } from '@/components/products/ProductsList'
import { LodingProducts, PaginateProducts } from '@/components/products'
import { Table } from '@/components/table/Table'
import { FilterProducts } from '@/components/products/FilterProducts'
import { prisma } from '../../../../prisma/prismaClient'
import type { Area } from '@/interfaces'
import { type GetServerSideProps } from 'next'

interface Props {
  areas: Area[]
}

const ProductsPage: FC<Props> = ({ areas }) => {
  const products = useProductStore((state) => state.products)

  const loadingProducts = useProductStore((state) => state.loadingProducts)
  const totalProducts = useProductStore((state) => state.totalProducts)
  const from = useProductStore((state) => state.from)
  const to = useProductStore((state) => state.to)

  const HEAD_ROWS = [
    'Producto',
    'Precio',
    'Stock',
    'Area',
    'Tipo',
    'Estado',
    'Acciones'
  ]

  return (
    <DashboardLayout>
      <header className="mb-8">
        <h3 className="text-3xl font-extrabold">
          Listando <span className="text-blue-500">Productos</span>
        </h3>
      </header>
      <div className="mb-8">
        <FilterProducts areas={areas}/>
      </div>
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
        <Table heads={HEAD_ROWS}>
          {loadingProducts
            ? (
            <LodingProducts />
              )
            : (
            <ProductsList products={products} />
              )}
        </Table>
      </div>
    </DashboardLayout>
  )
}

export default ProductsPage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const areas = await prisma.areas.findMany({
    select: {
      id: true,
      name: true,
      status: true
    }
  })
  return {
    props: {
      areas
    }
  }
}
