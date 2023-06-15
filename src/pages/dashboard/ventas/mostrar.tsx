import { DashboardLayout } from '@/layout'
import { FilterSales, SalesList, SalesPagination } from '@/components/sales'
import { HeaderPage } from '@/ui'
import { useEffect, type FC } from 'react'
import { useSalesStore } from '@/store'
import { shallow } from 'zustand/shallow'

const ShowSalesPage: FC = () => {
  const { getSales, sales, loadingSales } = useSalesStore(
    (state) => ({
      getSales: state.getSales,
      sales: state.sales,
      loadingSales: state.loadingSales
    }),
    shallow
  )

  useEffect(() => {
    getSales()
  }, [getSales])

  return (
    <DashboardLayout title="Mostrar ventas">
      <HeaderPage text="Listando" textBold="Ventas" />
      <div className="mb-8">
        <FilterSales />
      </div>
      <SalesPagination />
      <section>
        <SalesList sales={sales} loadingSales={loadingSales}/>
      </section>
    </DashboardLayout>
  )
}

export default ShowSalesPage
