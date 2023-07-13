import type { Area, AreaLean, QuantityProductsArea } from '@/interfaces'
import { prisma } from '../../prisma/prismaClient'

export const findAreaByName = async (name: string): Promise<Area | null> => {
  try {
    const [firstRow] = await prisma.$queryRaw<
    Array<{
      id: number
      name: string
      id_status: number
      active: boolean
    }>
    >`EXEC sp_obtener_producto_por_nombre ${name}`
    const area: Area = {
      id: firstRow.id,
      name: firstRow.name,
      status: {
        id: firstRow.id_status,
        active: firstRow.active
      }
    }
    return area
  } catch (error) {
    return null
  }
}

export const getActiveAreas = async (): Promise<AreaLean[] | null> => {
  try {
    const activeAreas = await prisma.$queryRaw<
    AreaLean[]
    >`EXEC sp_obtener_areas_activas`
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

export const getQuantyProductsArea = async (): Promise<
QuantityProductsArea[] | null
> => {
  try {
    const data = await prisma.$queryRaw`EXEC sp_obtener_producto_por_area`
    return data as QuantityProductsArea[]
  } catch (error) {
    return null
  }
}

export const getTotalAreas = async (): Promise<any> => {
  try {
    const data = await prisma.$queryRaw`EXEC sp_obtener_total_areas_activas`
    return data
  } catch (error) {
    return null
  }
}
