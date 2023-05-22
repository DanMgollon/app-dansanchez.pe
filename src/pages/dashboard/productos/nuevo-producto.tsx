import { type FC, useEffect } from 'react'
import type { GetServerSideProps } from 'next'
import { DashboardLayout } from '@/layout'
import type { Area, Product, ProductTypes } from '@/interfaces'
import { getActiveAreas } from '@/database/dbAreas'
import { getProductsTypes } from '@/database/dbProducts'
import { useProductStore } from '@/store'
import { toast } from 'react-hot-toast'
import { FormProduct } from '@/components/products/FormProduct'

interface Props {
  activeAreas: Area[]
  productsTypes: ProductTypes[]
}

const NewProductPagee: FC<Props> = ({ activeAreas, productsTypes }) => {
  const createProduct = useProductStore((state) => state.createProduct)
  const isCreated = useProductStore((state) => state.isCreated)

  const onSubmit = (data: Product): void => {
    createProduct(data)
  }

  useEffect(() => {
    if (isCreated) {
      toast.success('Producto creado correctamente', {
        position: 'top-right'
      })
    }
  }, [isCreated])

  return (
    <DashboardLayout>
      <header className="mb-8">
        <h3 className="font-black text-3xl">
          Agregar un nuevo <span className="text-blue-500">Producto</span>
        </h3>
      </header>
      <FormProduct
        activeAreas={activeAreas}
        productsTypes={productsTypes}
        onSubmit={onSubmit}
      />
    </DashboardLayout>
  )
}

export default NewProductPagee

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const activeAreas = await getActiveAreas()
  const productsTypes = await getProductsTypes()
  return {
    props: {
      activeAreas,
      productsTypes
    }
  }
}
