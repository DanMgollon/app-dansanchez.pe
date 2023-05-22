import type { Area } from '@/interfaces'
import { prisma } from '../../prisma/prismaClient'
import { type areas } from '@prisma/client'

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

export const getActiveAreas = async (): Promise<areas[] | null> => {
  try {
    const activeAreas = await prisma.areas.findMany({
      where: {
        status: {
          active: true
        }
      }
    })
    return activeAreas
  } catch (error) {
    return null
  }
}
