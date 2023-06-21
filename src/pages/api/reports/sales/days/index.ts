import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../../../prisma/prismaClient'
import type { LastSalesReportsDays } from '@/interfaces'
import { format } from 'date-fns'

type Data = { message: string } | LastSalesReportsDays[]
export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  switch (req.method) {
    case 'GET':
      getSalesByDays(req, res)
      return
    default:
      res.status(400).json({ message: 'Método no permitod' })
  }
}

interface Query {
  startAt: string
}

const getSalesByDays = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> => {
  const { startAt } = req.query as unknown as Query
  if (startAt === undefined) {
    res.status(400).json({ message: 'La fecha de inicio es obligatoria' })
    return
  }

  try {
    const data = await prisma.$queryRaw<
    LastSalesReportsDays[]
    >`SELECT CONVERT(DATE, s.[date], 102) as date, COUNT(*) as total 
    FROM sales s 
    WHERE s.[date] >= CONVERT(DATE, ${startAt}, 102)
    GROUP BY CONVERT(DATE, s.[date], 102)
    ORDER BY CONVERT(DATE, s.[date], 102) ASC`

    const dataFormatted = data.map((sale) => ({
      ...sale,
      date: format(new Date(sale.date), 'yyyy-MM-dd')
    }))

    res.status(200).json(dataFormatted)
  } catch (error) {
    res.status(400).json({ message: 'Error al obtener las ventas por días' })
  }
}
