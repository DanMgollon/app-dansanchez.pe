import { AddNewProduct, SaleData } from '@/components/sales'
import { Table } from '@/components/table'
import { DashboardLayout } from '@/layout'
import { useEffect } from 'react'
import { ButtonPrimary } from '@/ui'
import { useSalesStore } from '@/store'
import SalesProductsList from '@/components/sales/SalesProductsList'
import { BiCartAdd } from 'react-icons/bi'
import { SuccessSaleModal } from '@/components/reports'
import { getProductsActive } from '@/database/dbProducts'
import { toast } from 'react-hot-toast'
import type { FC } from 'react'
import type { GetServerSideProps } from 'next'
import type { Product } from '@/interfaces'

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
  const erroSale = useSalesStore((state) => state.errorSale)

  const onAddProduct = (): void => {
    setOpenModal(true)
  }

  useEffect(() => {
    if (erroSale !== null) {
      toast.error(erroSale, {
        position: 'top-right'
      })
    }
  }, [erroSale])

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
  const products = await getProductsActive()
  return {
    props: {
      products
    }
  }
}
