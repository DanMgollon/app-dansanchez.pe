import { useProductStore } from '@/store'
import { type FC, useMemo } from 'react'
import ReactPaginate from 'react-paginate'

export const PaginateProducts: FC = () => {
  const totalPage = useProductStore((state) => state.totalPages)
  const changePage = useProductStore((state) => state.changePage)
  const getNextProducts = useProductStore((state) => state.getProducts)
  // const isSearch = useProductStore((state) => state.isSearch)
  // const searchProducts = useProductStore((state) => state.searchProduct)
  const page = useProductStore((state) => state.page)

  const handlePageClick = (evt: { selected: number }): void => {
    const newPage = evt.selected + 1
    changePage(newPage)
    getNextProducts()
  }

  const forPageValue = useMemo(() => (page === 0 ? 0 : page - 1), [])

  return (
    <ReactPaginate
      pageCount={totalPage}
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
