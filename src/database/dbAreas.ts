import type { Area } from '@/interfaces'
import { prisma } from '../../prisma/prismaClient'

export const findAreaByName = async (name: string): Promise<Area | null> => {
  try {
    const area = await prisma.areas.findFirst({
      where: { name },
      include: { status: true }
    })
    return area
  } catch (error) {
    return null
  }
}
