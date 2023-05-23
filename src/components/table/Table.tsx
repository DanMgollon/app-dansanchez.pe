import type { FC, ReactNode } from 'react'

interface Props {
  heads: string[]
  children: ReactNode
}

export const Table: FC<Props> = ({ heads, children }) => {
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className="table-auto w-full">
        <thead className="text-xs font-semibold uppercase text-white bg-blue-800">
          <tr>
            {heads.map((head) => (
              <th key={crypto.randomUUID()} className="p-2 whitespace-nowrap">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        {children}
      </table>
    </div>
  )
}
