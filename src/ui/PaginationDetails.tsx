import type { FC } from 'react'

interface Props {
  totalPages: number
  from: number
  to: number
}

export const PaginationDetails: FC<Props> = ({ totalPages, from, to }) => {
  return (
    <div>
      <p className="font-medium text-zinc-500">
        Viendo{' '}
        <span className="text-black font-semibold">
          {from}-{to}
        </span>{' '}
        de <span className="text-black font-semibold">{totalPages}</span>
      </p>
    </div>
  )
}
