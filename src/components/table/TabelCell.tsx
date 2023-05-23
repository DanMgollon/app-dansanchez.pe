import type { ReactNode, FC } from 'react'

interface Props {
  children: ReactNode
  className?: string
  scope?: 'row' | 'col'
}

export const TabelCell: FC<Props> = ({ children, className }) => {
  return (
    <td className={`px-2 py-4 whitespace-wrap ${className ?? ''}`}>
      { children }
    </td>
  )
}
