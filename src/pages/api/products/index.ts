import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../prisma/prismaClient'
import type { Product } from '@/interfaces'

type Data =
 | { message: string }
 | {
   from: number
   to: number
   total: number
   products: Product[]
 }

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  switch (req.method) {
    case 'GET':
      getProducts(req, res)
      return
    default:
      res.status(400).json({ message: 'método no perrmitodo' })
  }
}

const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
  const { query } = req
  const DATA_POR_PAGE = 20
  try {
    const page =
      query.page === '1' || query.page === undefined
        ? 0
        : Number(req.query.page)
    const skip = DATA_POR_PAGE * page

    const total = await prisma.products.count()
    const products = await prisma.products.findMany({
      take: DATA_POR_PAGE,
      skip,
      select: {
        id: true,
        name: true,
        price: true,
        stock: true,
        areas: true,
        status: true,
        products_types: true
      }
    })
    const from = skip === 0 ? 1 : skip
    const to = skip + products.length

    res.status(200).json({
      total,
      from,
      to,
      products: products as unknown as Product[]
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'No se pudo obtener los productos' })
  }
}
