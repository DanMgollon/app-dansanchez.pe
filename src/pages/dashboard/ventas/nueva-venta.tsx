import { AddNewProduct, SaleData } from '@/components/sales'
import { Table } from '@/components/table'
import { DashboardLayout } from '@/layout'
import { type FC, useEffect } from 'react'
import { type GetServerSideProps } from 'next'
import { prisma } from '../../../../prisma/prismaClient'
import type { Product } from '@/interfaces'
import { ButtonPrimary } from '@/ui'
import { useSalesStore } from '@/store'
import SalesProductsList from '@/components/sales/SalesProductsList'
import { BiCartAdd } from 'react-icons/bi'
import { SuccessSaleModal } from '@/components/reports'
import { useUIStore } from '@/store/useUIStore'

const HEAD_ROWS = [
  'Producto',
  'Precio',
  'Tipo',
  'Disponibles',
  'Cantidad',
  'Total',
  'Acciones'
]

interface Props {
  products: Product[]
}

const GenerateSalePage: FC<Props> = ({ products }) => {
  const setOpenModal = useSalesStore((state) => state.setOpenModal)
  const productsSales = useSalesStore((state) => state.productsSales)
  const successfullySale = useSalesStore((state) => state.successfullySale)
  const setIsModalSaleOpen = useUIStore(state => state.setIsModalSaleOpen)

  const onAddProduct = (): void => {
    setOpenModal(true)
  }

  useEffect(() => {
    if (successfullySale) {
      setIsModalSaleOpen(true)
    }
  }, [successfullySale])

  return (
    <DashboardLayout>
      <header className="mb-10 text-3xl font-extrabold">
        <h3>
          Generar una nueva <span className="text-blue-500">Venta</span>
        </h3>
      </header>
      <ButtonPrimary
        onClick={onAddProduct}
        className="w-fit mb-5 flex gap-2 items-center"
      >
        <BiCartAdd size={22} />
        AGREGAR PRODUCTO
      </ButtonPrimary>

      <div className="flex gap-4">
        <section className="w-8/12">
          <Table heads={HEAD_ROWS}>
            <SalesProductsList products={productsSales} />
          </Table>
        </section>
        <div className="w-4/12 bg-white shadow-md">
          <SaleData />
        </div>
      </div>
      <AddNewProduct products={products} />
      <SuccessSaleModal />
    </DashboardLayout>
  )
}

export default GenerateSalePage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const products = await prisma.products.findMany({
    select: {
      id: true,
      name: true,
      stock: true,
      price: true,
      products_types: {
        select: {
          type: true
        }
      }
    }
  })
  const productsSerilized = JSON.parse(JSON.stringify(products))

  return {
    props: {
      products: productsSerilized
    }
  }
}
