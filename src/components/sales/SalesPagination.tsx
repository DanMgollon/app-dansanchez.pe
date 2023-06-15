import { useSalesStore } from '@/store'
import { useSaleSearchStore } from '@/store/useSeachSaleStore'
import { Pagination } from '@/ui'
import { PaginationDetails } from '@/ui/PaginationDetails'
import { useMemo, type FC } from 'react'
import { shallow } from 'zustand/shallow'

export const SalesPagination: FC = () => {
  const { totalSales, from, to, changeSalesPage, getSales, salesPage } =
    useSalesStore(
      (state) => ({
        getSales: state.getSales,
        sales: state.sales,
        totalSales: state.totalSales,
        from: state.from,
        to: state.to,
        changeSalesPage: state.changeSalesPage,
        salesPage: state.salesPage
      }),
      shallow
    )
  const customer = useSaleSearchStore((state) => state.customer)

  const handlePageChange = (selectedItem: { selected: number }): void => {
    const newPage = selectedItem.selected + 1
    changeSalesPage(newPage)
    getSales(customer)
  }

  const forcePageValue = useMemo(
    () => (
      salesPage <= 0 ? 0 : salesPage - 1
    ), [])

  return (
    <div className="mb-5 flex justify-between">
      <PaginationDetails from={from} to={to} totalPages={totalSales}/>
      <Pagination
        forcePage={forcePageValue}
        onPageChange={handlePageChange}
        pageCount={totalSales}
      />
    </div>
  )
}
