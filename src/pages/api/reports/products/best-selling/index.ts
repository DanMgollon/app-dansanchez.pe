import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../../../prisma/prismaClient'
import type { MostSelledProductsI } from '@/interfaces'

type Data =
  | { message: string }
  | MostSelledProductsI[]

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> {
  switch (req.method) {
    case 'GET':
      getBestSellingProducts(req, res)
      break

    default:
      res.status(200).json({ message: 'Método no permitido' })
  }
}
const getBestSellingProducts = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
  try {
    const data = await prisma.$queryRaw<MostSelledProductsI[]>`SELECT TOP 5 p.name AS name, SUM(sd.quantity) AS total
    FROM 
    sales_details sd
    INNER JOIN products p
    ON sd.producto_id = p.id
    GROUP BY sd.sales_id, p.name
    ORDER BY SUM(sd.quantity) DESC`
    res.status(200).json(data)
  } catch (error) {
    res.status(400).json({ message: 'Error al obtener los productos más vendidos' })
  }
}
