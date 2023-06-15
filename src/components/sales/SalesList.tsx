import type { FC } from 'react'
import { LoadingTableData, Table } from '../table'
import { SalesListItem } from './SalesListItem'
import type { SalePDF } from '@/interfaces'

const HEADS_SALES = ['ID', 'CLIENTE', 'DNI', 'FECHA', 'PFD']

interface Props {
  sales: SalePDF[]
  loadingSales: boolean
}

export const SalesList: FC<Props> = ({ sales, loadingSales }) => {
  return (
    <div className="mb-5">
      <Table heads={HEADS_SALES}>
        {loadingSales
          ? <LoadingTableData />
          : (
          <>
            {sales?.map((sale) => (
              <SalesListItem key={sale.id} sale={sale} />
            ))}
          </>
            )}
      </Table>
    </div>
  )
}
