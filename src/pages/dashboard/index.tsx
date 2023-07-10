import { CardHome } from '@/components/home'
import { DashboardLayout } from '@/layout'
import { type GetServerSideProps } from 'next'
import { prisma } from '../../../prisma/prismaClient'
import { type FC } from 'react'
import type { LastSales as LastSalesI, TotalAreaReports } from '@/interfaces'
import { getLastSales } from '@/database/dbSales'
import { ActiveAreas, EarningsByMonths } from '@/components/reports'
import { getTotalAreas } from '@/database/dbAreas'
import { LastSales } from '@/components/home/LastSales'
import { AiOutlineHome } from 'react-icons/ai'

interface Props {
  totalProducts: number
  totalAreas: number
  totalSales: number
  lastSales: LastSalesI[]
  totalAreasReports: TotalAreaReports[]
}

export const Home: FC<Props> = ({
  totalProducts,
  totalAreas,
  totalSales,
  lastSales,
  totalAreasReports
}) => {
  return (
    <DashboardLayout>
      <header className="mb-5">
        <div className="rounded-[50px] bg-blue-900 font-extrabold  inline-block p-2">
          <p className='text-white flex gap-2 items-center'>
            <AiOutlineHome className="font-extrabold" size={20} />
            <span> INICIO </span>
          </p>
        </div>
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
      <div className="grid grid-cols-12 items-start mt-10 mb-5 gap-4">
        <section className="col-span-7">
          <LastSales sales={lastSales}/>
        </section>
        <div className="col-span-5">
          <div className="mt-10">
            <EarningsByMonths />
          </div>
          <div className="mt-5">
            <ActiveAreas areas={totalAreasReports} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const totalProducts = await prisma.products.count()
  const totalAreas = await prisma.areas.count()
  const totalSales = await prisma.sales.count()
  const lastSales = await getLastSales()
  const totalAreasReports = await getTotalAreas()
  return {
    props: {
      totalProducts,
      totalAreas,
      totalSales,
      lastSales,
      totalAreasReports
    }
  }
}
