import type { LastSales } from '@/interfaces'
import { prisma } from '../../prisma/prismaClient'

export const getLastSales = async (): Promise<LastSales[] | null> => {
  try {
    const lastSales =
    await prisma.$queryRaw<LastSales[]>`SELECT TOP 12 s.customer, CONVERT(DATE, s.[date]) AS date, (sd.quantity * pd.price) AS total, p.url AS url_pdf FROM sales s 
    INNER JOIN sales_details sd 
    ON s.id = sd.sales_id
    INNER JOIN pdfs p 
    ON s.id = p.sales_id 
    INNER JOIN  products pd 
    ON pd.id = sd.producto_id
    ORDER BY s.[date] DESC`
    return JSON.parse(JSON.stringify(lastSales))
  } catch (error) {
    return null
  }
}
