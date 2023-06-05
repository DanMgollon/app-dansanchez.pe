import { useProductStore, useSearchProductStore } from '@/store'
import { type FC, useMemo } from 'react'
import ReactPaginate from 'react-paginate'
import { shallow } from 'zustand/shallow'

export const PaginateProducts: FC = () => {
  const {
    totalPages,
    page,
    getNextProducts
  } = useProductStore((state) => ({
    totalPages: state.totalPages,
    page: state.page,
    getNextProducts: state.getProducts
  }), shallow)
  const { searchProduct, areas, status } = useSearchProductStore((state) => ({
    searchProduct: state.searchProduct,
    areas: state.areas,
    status: state.status
  }), shallow)

  const changePage = useProductStore((state) => state.changePage)
  const handlePageClick = (evt: { selected: number }): void => {
    const newPage = evt.selected + 1
    changePage(newPage)
    getNextProducts(searchProduct, areas, status)
  }

  const forPageValue = useMemo(() => (page === 0 ? 0 : page - 1), [])

  return (
    <ReactPaginate
      pageCount={totalPages}
      previousLabel="<"
      nextLabel=">"
      pageLinkClassName="w-ful h-full"
      previousClassName="bg-blue-700 rounded border border-gray-300 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 cursor-pointer"
      nextClassName="bg-blue-700 rounded border border-gray-300 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 cursor-pointer"
      containerClassName="flex gap-2 items-center"
      pageClassName="bg-white rounded border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer px-4 py-2"
      activeClassName="!border-blue-400 !bg-blue-100 !hover:bg-blue-400"
      activeLinkClassName="text-blue-800"
      onPageChange={handlePageClick}
      forcePage={forPageValue}
    />
  )
}
