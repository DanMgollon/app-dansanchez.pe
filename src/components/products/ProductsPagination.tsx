import { useProductStore, useSearchProductStore } from '@/store'
import { Pagination, PaginationDetails } from '@/ui'
import { type FC, useMemo } from 'react'
import { shallow } from 'zustand/shallow'

export const ProductsPagination: FC = () => {
  const { totalPages, page, getNextProducts, totalProducts, from, to } =
    useProductStore(
      (state) => ({
        totalPages: state.totalPages,
        page: state.page,
        getNextProducts: state.getProducts,
        totalProducts: state.totalProducts,
        from: state.from,
        to: state.to
      }),
      shallow
    )
  const { searchProduct, areas, status } = useSearchProductStore(
    (state) => ({
      searchProduct: state.searchProduct,
      areas: state.areas,
      status: state.status
    }),
    shallow
  )

  const changePage = useProductStore((state) => state.changePage)

  const handlePageClick = (evt: { selected: number }): void => {
    const newPage = evt.selected + 1
    changePage(newPage)
    getNextProducts(searchProduct, areas, status)
  }

  const forPageValue = useMemo(() => (page === 0 ? 0 : page - 1), [])

  return (
    <div className="w-full mb-5 flex justify-between">
      <PaginationDetails from={from} to={to} totalPages={totalProducts} />
      <Pagination
        forcePage={forPageValue}
        onPageChange={handlePageClick}
        pageCount={totalPages}
      />
    </div>
  )
}
