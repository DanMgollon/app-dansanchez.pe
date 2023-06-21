import { DashboardLayout } from '@/layout'
import { HeaderPage } from '@/ui'
import type { FC } from 'react'
import { getTotalAreas, getQuantyProductsArea } from '@/database/dbAreas'
import type { GetServerSideProps } from 'next'
import type {
  MostSelledProductsI,
  QuantityProductsArea,
  TotalAreaReports
} from '@/interfaces'
import {
  ActiveAreas,
  LastSalesByDays,
  MostSelledProducts,
  QuantityProductsAreas
} from '@/components/reports'
import { LastSalesByMonths } from '@/components/products/LastSalesByMonths'
import { EarningsByMonths } from '@/components/reports/EarningsByMonths'
import { getMostSelledProducts } from '@/database/dbProducts'

interface Props {
  totalAreasReports: TotalAreaReports[]
  productsPerArea: QuantityProductsArea[]
  mostSelledProducts: MostSelledProductsI[]
}

const WatchReportsPage: FC<Props> = ({
  totalAreasReports,
  productsPerArea,
  mostSelledProducts
}) => {
  return (
    <DashboardLayout>
      <HeaderPage text="Reportes" />
      <section>
        <div className="grid grid-cols-12 items-center">
          <div className="mb-8 col-span-8">
            <LastSalesByDays />
          </div>
          <div className="col-span-4 ml-4">
            <ActiveAreas areas={totalAreasReports} />
          </div>
        </div>
        <div className='grid grid-cols-12 gap-4'>
          <div className="mb-8 col-span-6">
            <LastSalesByMonths />
          </div>
          <div className="mb-8 col-span-6">
            <EarningsByMonths />
          </div>
        </div>
        <div className="mb-8 col-span-6">
          <QuantityProductsAreas areas={productsPerArea} />
        </div>
        <div className="mb-8">
          <MostSelledProducts products={mostSelledProducts} />
        </div>
      </section>
    </DashboardLayout>
  )
}

export default WatchReportsPage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const totalAreasReports = await getTotalAreas()
  const productsPerArea = await getQuantyProductsArea()
  const mostSelledProducts = await getMostSelledProducts()

  return {
    props: {
      totalAreasReports,
      productsPerArea,
      mostSelledProducts
    }
  }
}
