import { DashboardLayout } from '@/layout'
import type { FC } from 'react'
import { useProductStore } from '@/store'
import { ProductsList } from '@/components/products/ProductsList'
import { ProductsPagination } from '@/components/products'
import { FilterProducts } from '@/components/products/FilterProducts'
import { prisma } from '../../../../prisma/prismaClient'
import type { Area } from '@/interfaces'
import { type GetServerSideProps } from 'next'
import { HeaderPage } from '@/ui'

interface Props {
  areas: Area[]
}

const ProductsPage: FC<Props> = ({ areas }) => {
  const { products, loadingProducts } = useProductStore((state) => ({
    products: state.products,
    loadingProducts: state.loadingProducts
  }))

  return (
    <DashboardLayout>
      <HeaderPage text='Listando' textBold='Productos'/>
      <div className="mb-8">
        <FilterProducts areas={areas} />
      </div>
      <div className="flex justify-between items-center mb-5 ">
        <ProductsPagination />
      </div>
      <ProductsList products={products} loadingProducts={loadingProducts} />
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
