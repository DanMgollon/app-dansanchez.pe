import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}
export const TableRow: FC<Props> = ({ children }) => {
  return (
    <tr className='bg-white border-b hover:bg-gray-50'>
      {children}
    </tr>
  )
}
