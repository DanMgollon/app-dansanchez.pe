import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../../../prisma/prismaClient'
import { type LastSalesReportsMonths } from '@/interfaces'
import { monthsSorted } from '@/constants'

type Data =
 | { message: string }
 | LastSalesReportsMonths[]

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
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

const getSalesByMonths = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> => {
  const { startAt } = req.query as unknown as Query
  if (startAt === undefined) {
    res.status(400).json({ message: 'La fecha de inicio es obligatoria' })
    return
  }

  try {
    const data = await prisma.$queryRaw<Array<{
      monthNumber: number
      year: number
      total: number
    }>>`
      SELECT MONTH (s.[date]) as monthNumber, 
      DATENAME(YEAR, s.[date]) AS year, 
      COUNT(*) as total
      FROM sales s 
      WHERE s.[date] >= CONVERT(DATE, ${startAt}, 102)
      GROUP BY MONTH(s.[date]), DATENAME(YEAR, s.[date])
      ORDER BY DATENAME(YEAR, s.[date]), MONTH(s.[date])
    `
    const dataFormatted: LastSalesReportsMonths[] = data.map(sales => ({
      month: `${monthsSorted[sales.monthNumber]} - ${sales.year}`,
      total: sales.total
    }))
    res.status(200).json(dataFormatted)
  } catch (error) {
    res.status(400).json({ message: 'Error al obtener las ventas por meses' })
  }
}
