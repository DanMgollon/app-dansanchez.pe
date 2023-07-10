import { formantDate } from '@/utils/formantDate'
import { formatterMoney } from '@/utils/formatterMoney'
import Link from 'next/link'
import type { FC } from 'react'
import { AiFillFilePdf } from 'react-icons/ai'
import { Table, TableRow, TabelCell } from '../table'
import type { LastSales as LastSalesI } from '@/interfaces'

interface Props {
  sales: LastSalesI[]
}

export const LastSales: FC<Props> = ({ sales }) => {
  return (
    <>
      <h3 className="font-extrabold text-xl mb-3 text-blue-900">
        ÚLTIMAS VENTAS
      </h3>
      <Table heads={['CLIENTE', 'FECHA', 'TOTAL', 'PFD']}>
        {sales?.map((sale) => (
          <TableRow key={sale.url_pdf}>
            <TabelCell scope="row" className="font-medium text-gray-800">
              {sale.customer}
            </TabelCell>
            <TabelCell className="text-center">
              <span className="text-gray-600">
                {formantDate(new Date(sale.date), 'dd/MM/yyyy')}
              </span>
            </TabelCell>
            <TabelCell className="text-center">
              <span className="text-gray-600">
                {formatterMoney(sale.total)}
              </span>
            </TabelCell>
            <TabelCell className="flex justify-end">
              <Link
                href={sale.url_pdf}
                target="_blank"
                className="text-blue-800 hover:underline flex gap-2 items-center"
              >
                Ver PDF <AiFillFilePdf />
              </Link>
            </TabelCell>
          </TableRow>
        ))}
      </Table>
    </>
  )
}
