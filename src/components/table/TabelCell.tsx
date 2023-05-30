import type { ReactNode, FC, TdHTMLAttributes } from 'react'

interface Props extends TdHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode
  className?: string
  scope?: 'row' | 'col'
}

export const TabelCell: FC<Props> = ({ children, className, colSpan }) => {
  return (
    <td className={`px-2 py-4 whitespace-wrap ${className ?? ''}`} colSpan={colSpan}>
      { children }
    </td>
  )
}
