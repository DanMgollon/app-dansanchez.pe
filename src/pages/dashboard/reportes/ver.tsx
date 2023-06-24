import { DashboardLayout } from '@/layout'
import { HeaderPage } from '@/ui'
import type { FC } from 'react'
import { getTotalAreas, getQuantyProductsArea } from '@/database/dbAreas'
import type { GetServerSideProps } from 'next'
import type {
  MostSelledProductsI,
  ProductsToExpirate,
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
import { getMostSelledProducts, getProductsToExpirate } from '@/database/dbProducts'
import { ExpiringProducts } from '@/components/reports/ExpiringProducts'

interface Props {
  totalAreasReports: TotalAreaReports[]
  productsPerArea: QuantityProductsArea[]
  mostSelledProducts: MostSelledProductsI[]
  productsToExpirate: ProductsToExpirate[]
}

const WatchReportsPage: FC<Props> = ({
  totalAreasReports,
  productsPerArea,
  mostSelledProducts,
  productsToExpirate
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
        <div className="mb-8">
          <ExpiringProducts productsToExpirate={productsToExpirate}/>
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
  const productsToExpirate = await getProductsToExpirate()
  console.log(productsToExpirate)

  return {
    props: {
      totalAreasReports,
      productsPerArea,
      mostSelledProducts,
      productsToExpirate
    }
  }
}
