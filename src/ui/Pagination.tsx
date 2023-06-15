import type { FC } from 'react'
import ReactPaginate from 'react-paginate'

interface Props {
  pageCount: number
  onPageChange: (selectedItem: { selected: number }) => void
  forcePage: number
}

export const Pagination: FC<Props> = ({ pageCount, forcePage, onPageChange }) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      previousLabel="<"
      nextLabel=">"
      pageLinkClassName="w-ful h-full"
      previousClassName="bg-blue-700 rounded border border-gray-300 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 cursor-pointer"
      nextClassName="bg-blue-700 rounded border border-gray-300 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 cursor-pointer"
      containerClassName="flex gap-2 items-center"
      pageClassName="bg-white rounded border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer px-4 py-2"
      activeClassName="!border-blue-400 !bg-blue-100 !hover:bg-blue-400"
      activeLinkClassName="text-blue-800"
      onPageChange={onPageChange}
      forcePage={forcePage}
    />
  )
}
