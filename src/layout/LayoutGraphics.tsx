import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const LayoutGraphics: FC<Props> = ({ children }) => {
  return (
    <div className="w-full bg-white shadow px-8 py-2 rounded-lg h-full">
      {children}
    </div>
  )
}
