import { FormProduct } from '@/components/products/FormProduct'
import { dbAreas, dbProducts } from '@/database'
import type { Product, Area, ProductTypes } from '@/interfaces'
import { DashboardLayout } from '@/layout'
import { useProductStore } from '@/store'
import type { GetServerSideProps } from 'next'
import { type FC, useEffect } from 'react'
import { toast } from 'react-hot-toast'

interface Props {
  activeAreas: Area[]
  productsTypes: ProductTypes[]
  product: Product
}

const EditProductPage: FC<Props> = ({
  activeAreas,
  productsTypes,
  product
}) => {
  const updateProduct = useProductStore(state => state.updateProduct)
  const isUpdated = useProductStore(state => state.isUpdated)

  const onSubmit = (data: Product): void => {
    updateProduct(data)
  }

  useEffect(() => {
    if (isUpdated) {
      toast.success('Producto actualizado correctamente', {
        position: 'top-right'
      })
    }
  }, [isUpdated])

  return (
    <DashboardLayout>
      <header className="mb-8">
        <h3 className="font-black text-3xl">
          Editar un <span className="text-blue-500">Producto</span>
        </h3>
      </header>
      <FormProduct
        activeAreas={activeAreas}
        productsTypes={productsTypes}
        product={product}
        onSubmit={onSubmit}
      />
    </DashboardLayout>
  )
}

export default EditProductPage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query

  const product = await dbProducts.findProductById(id as string)

  if (product === null) {
    return {
      redirect: {
        destination: '/dashboard/productos/mostrar',
        permanent: false
      }
    }
  }
  const productSerialized = JSON.parse(JSON.stringify(product))
  const activeAreas = await dbAreas.getActiveAreas()
  const productsTypes = await dbProducts.getProductsTypes()

  return {
    props: {
      activeAreas,
      productsTypes,
      product: productSerialized
    }
  }
}
