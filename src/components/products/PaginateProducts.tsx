import { useProductStore } from '@/store'
import type { FC } from 'react'
import ReactPaginate from 'react-paginate'

export const PaginateProducts: FC = () => {
  const totalPage = useProductStore((state) => state.totalPages)
  const changePage = useProductStore((state) => state.changePage)
  const getProducts = useProductStore((state) => state.getProducts)

  const handlePageClick = (evt: { selected: number }): void => {
    changePage(evt.selected + 1)
    getProducts()
  }

  return (
    <ReactPaginate
      pageCount={totalPage}
      previousLabel="<"
      nextLabel=">"
      pageLinkClassName="w-ful h-full"
      previousClassName="bg-neutral-800 rounded border border-gray-300 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700 cursor-pointer"
      nextClassName="bg-neutral-800 rounded border border-gray-300 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700 cursor-pointer"
      containerClassName="flex gap-2 items-center"
      pageClassName="bg-white rounded border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer px-4 py-2"
      activeClassName='border-blue-500'
      activeLinkClassName='text-blue-500'
      onPageChange={handlePageClick}
    />
  )
}
