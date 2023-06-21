import type { SalesReportsBySevenDays } from '@/interfaces'
import { prisma } from '../../prisma/prismaClient'

export const getLastSevenDaysSales = async (): Promise<SalesReportsBySevenDays[] | null> => {
  try {
    const data =
    await prisma.$queryRaw`SELECT UPPER(DATENAME(WEEKDAY, ls.[date])) AS day, COUNT(*)  AS total
    FROM (
    SELECT s.id, s.[date] 
    FROM sales s
    WHERE s.[date] >= DATEADD(day, -6, GETDATE())
    ) AS ls
    GROUP BY DATENAME(WEEKDAY, ls.[date])`
    return data as SalesReportsBySevenDays[]
  } catch (error) {
    return null
  }
}
