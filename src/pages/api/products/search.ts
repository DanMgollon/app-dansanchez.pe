import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../prisma/prismaClient'
import { type Product } from '@/interfaces'

type Data =
  | { message: string }
  | {
    total: number
    from: number
    to: number
    products: Product[]
  }

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  switch (req.method) {
    case 'GET':
      searchProducts(req, res)
      return
    default:
      res.status(400).json({
        message: 'Endopoint no permitido'
      })
  }
}

interface SearchQuery {
  query: string
  areas: string
  status: string
  page: string
}

const searchProducts = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> => {
  const DATA_POR_PAGE = 20
  const { areas, query, status, page } = req.query as unknown as SearchQuery
  const searchProduct = query ?? undefined
  const areasAsArrayNumber =
    areas === undefined || areas === ''
      ? undefined
      : areas?.split(',').map((area) => Number(area))
  const statusAsNumber =
    status === undefined || status === ''
      ? undefined
      : Number(status)
  const pageAsNumber =
    page === undefined || page === '1'
      ? 0
      : Number(page)
  const skip = DATA_POR_PAGE * pageAsNumber

  try {
    const total = await prisma.products.count({
      where: {
        name: {
          contains: searchProduct
        },
        area_id: {
          in: areasAsArrayNumber?.length > 0 ? areasAsArrayNumber : undefined
        },
        status_id: {
          equals: statusAsNumber
        }
      }
    })
    const products = await prisma.products.findMany({
      where: {
        name: {
          contains: searchProduct
        },
        area_id: {
          in: areasAsArrayNumber
        },
        status_id: {
          equals: statusAsNumber
        }
      },
      skip,
      take: DATA_POR_PAGE,
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
    res.status(400).json({
      message: 'Error al buscar productos'
    })
  }
}
