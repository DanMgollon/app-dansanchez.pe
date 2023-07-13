import type { LastSales } from '@/interfaces'
import { prisma } from '../../prisma/prismaClient'

export const getLastSales = async (): Promise<LastSales[] | null> => {
  try {
    const lastSales =
    await prisma.$queryRaw<LastSales[]>`EXEC sp_obtener_ultimas_ventas`
    return JSON.parse(JSON.stringify(lastSales))
  } catch (error) {
    return null
  }
}
