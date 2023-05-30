import { CardHome } from '@/components/home'
import { DashboardLayout } from '@/layout'

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { type GetServerSideProps } from 'next'
import { prisma } from '../../../prisma/prismaClient'
import { type FC } from 'react'

interface Props {
  totalProducts: number
  totalAreas: number
  totalSales: number
}

export const Home: FC<Props> = ({ totalProducts, totalAreas, totalSales }) => {
  return (
    <DashboardLayout>
      <header className="mb-5">
        <h2 className="text-3xl font-black">
          PÁGINA <span className="text-blue-700">PRINCIPAL</span>
        </h2>
      </header>
      <section className="grid md:grid-cols-3 gap-4">
        <CardHome
          bgClassName="bg-cyan-500"
          darkBgClassName="bg-cyan-600"
          title="PRODUCTOS"
          value={totalProducts}
          link="/dashboard/productos/mostrar"
        />
        <CardHome
          bgClassName="bg-green-500"
          darkBgClassName="bg-green-600"
          title="Areas"
          value={totalAreas}
          link="/dashboard/areas/mostrar"
        />
        <CardHome
          bgClassName="bg-yellow-500"
          darkBgClassName="bg-yellow-600"
          title="Ventas"
          value={totalSales}
          link="/dashboard/ventas/mostrar"
        />
      </section>
    </DashboardLayout>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const totalProducts = await prisma.products.count()
  const totalAreas = await prisma.areas.count()
  const totalSales = await prisma.sales.count()
  return {
    props: {
      totalProducts,
      totalAreas,
      totalSales
    }
  }
}
