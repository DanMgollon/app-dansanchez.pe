import type { Area, QuantityProductsArea } from '@/interfaces'
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

export const getAreas = async (): Promise<Area[] | null> => {
  try {
    const areas = await prisma.areas.findMany({
      select: {
        id: true,
        name: true,
        status: true
      }
    })
    return areas
  } catch (error) {
    return null
  }
}

export const getQuantyProductsArea = async (): Promise<QuantityProductsArea[] | null> => {
  try {
    const data = await prisma.$queryRaw`SELECT a.name as area, COUNT(*) as total
  FROM products p 
  INNER JOIN areas a 
  ON p.area_id  = a.id
  GROUP BY a.name;`
    return data as QuantityProductsArea[]
  } catch (error) {
    return null
  }
}

export const getTotalAreas = async (): Promise<any> => {
  try {
    const data = await prisma.$queryRaw`SELECT s.active, COUNT(*) as total 
    FROM areas a 
    INNER JOIN status s  
    ON a.status_id  = s.id 
    GROUP BY s.active`
    return data
  } catch (error) {
    return null
  }
}
