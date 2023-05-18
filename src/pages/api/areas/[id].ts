import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../prisma'
import type { Area } from '@/interfaces'

type Data = { message: string } | { area: Area }

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  switch (req.method) {
    case 'PUT':
      updateArea(req, res)
      break
    case 'DELETE':
      deleteArea(req, res)
      return
    default:
      res.json({ message: 'Enpoint no permitdo' })
  }
}

export const updateArea = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> => {
  const { id } = req.query
  const idAsNumber = Number(id)

  const { name, status: { active } } = req.body as Area
  if (name === undefined || active === undefined) {
    res.status(400).json({ message: 'Faltan datos en la petición' })
    return
  }

  try {
    const area = await prisma.areas.findFirst({ where: { id: idAsNumber } })
    if (area === null) {
      res
        .status(400)
        .json({ message: `No existe una area con ese id ${idAsNumber}` })
      return
    }

    const areaUpdated = await prisma.areas.update({
      where: { id: idAsNumber },
      data: { name, status_id: active ? 2 : 1 },
      include: { status: true }
    })

    res.json({ area: areaUpdated })
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar el area' })
  }
}
const deleteArea = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> => {
  const { id } = req.query
  const idAsNumber = Number(id)

  const area = await prisma.areas.findFirst({ where: { id: idAsNumber } })
  if (area === null) {
    res
      .status(400)
      .json({ message: `No existe una area con ese id ${idAsNumber}` })
    return
  }
  const containsProducs = await prisma.products.findMany({
    where: { areas: { id: idAsNumber } }
  })

  if (containsProducs.length > 0) {
    res.status(400).json({ message: 'No se puede eliminar esta area porque contiene productos' })
    return
  }

  try {
    const areaDeleted = await prisma.areas.delete({
      where: {
        id: idAsNumber
      },
      include: {
        status: true
      }
    })
    res.status(200).json({ area: areaDeleted })
  } catch (error) {
    res.status(400).json({ message: 'Error al eliminar el area' })
  }
}
