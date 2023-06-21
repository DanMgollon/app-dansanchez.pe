import { type QueryResponseSalesReportsByMonths, type EarningsReportsByMonths } from '@/interfaces'
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../../prisma/prismaClient'
import { monthsSorted } from '@/constants'

type Data =
  | { message: string }
  | EarningsReportsByMonths[]

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> {
  switch (req.method) {
    case 'GET':
      getSalesByMonths(req, res)
      return
    default:
      res.status(400).json({ message: 'Método no permitido' })
  }
}

interface Query {
  startAt: string
}

const getSalesByMonths = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
  try {
    const { startAt } = req.query as unknown as Query
    const data = await prisma.$queryRaw<QueryResponseSalesReportsByMonths[]>`SELECT 
    SUM(sd.quantity * p.price) AS total,
    MONTH(s.[date]) as monthNumber,
    DATENAME(YEAR, s.[date]) AS year
    FROM sales s 
    INNER JOIN sales_details sd 
    ON s.id  = sd.sales_id
    INNER JOIN products p 
    ON sd.producto_id = p.id
    WHERE s.[date] >= CONVERT(DATE, ${startAt}, 102)
    GROUP BY MONTH(s.[date]), DATENAME(YEAR, s.[date])
    ORDER BY DATENAME(YEAR, s.[date]), MONTH(s.[date])`

    const dataFormatted: EarningsReportsByMonths[] = data.map(sales => ({
      month: `${monthsSorted[sales.monthNumber - 1]} - ${sales.year}`,
      total: sales.total
    }))

    res.status(200).json(dataFormatted)
  } catch (error) {
    res.status(400).json({ message: 'Error al obtener las ganancias por meses' })
  }
}
