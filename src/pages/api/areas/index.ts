import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../prisma'
import type { Area } from '@/interfaces'

type Data =
    | { message: string }
    | Area

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>): void {
  switch (req.method) {
    case 'GET':
      getAreas(req, res)
      return
    case 'POST':
      createArea(req, res)
      return
    default:
      res.status(500).json({ message: 'Endpoint no permito' })
  }
}

const getAreas = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const areas = await prisma.areas.findMany({
      select: {
        id: true,
        name: true,
        status: {
          select: {
            active: true
          }
        }
      }
    })
    res.status(200).json(areas)
    return
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las areas' })
  }
}
const createArea = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
  const { name, active } = req.body as { name: string, active: boolean }

  if (name === undefined || active === undefined) {
    res.status(400).json({ message: 'Faltan campos en la petición' })
    return
  }

  try {
    const area = await prisma.areas.create({
      data: {
        name,
        status_id: active ? 2 : 1
      },
      include: {
        status: true
      }
    })
    res.status(201).json(area)
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el area' })
  }
}
