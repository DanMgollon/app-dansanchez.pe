import { useMemo, type FC } from 'react'
import { TableRow } from '@/components/table'
import { TabelCell } from '../table'
import type { SalePDF } from '@/interfaces'
import Link from 'next/link'

interface Props {
  sale: SalePDF
}

export const SalesListItem: FC<Props> = ({ sale }) => {
  const {
    customer,
    dni,
    date,
    id,
    pdfs: { url }
  } = sale

  const dateAsString = useMemo(() => {
    return new Date(date).toLocaleString()
  }, [date])

  return (
    <TableRow>
      <TabelCell scope="row" className="font-medium text-gray-800">
        {id}
      </TabelCell>
      <TabelCell>
        <span className="text-gray-800 font-semibold">{customer}</span>
      </TabelCell>
      <TabelCell>
        <span className="text-gray-600">{dni}</span>
      </TabelCell>
      <TabelCell>
        <span className="text-gray-600">{dateAsString}</span>
      </TabelCell>
      <TabelCell>
        <div className="flex justify-end">
          <Link className="text-blue-700 text-sm hover:underline font-semibold" href={url} target='_blank'>
            Ver PDF
          </Link>
        </div>
      </TabelCell>
    </TableRow>
  )
}
