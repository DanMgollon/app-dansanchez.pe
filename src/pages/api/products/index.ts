import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../prisma/prismaClient'
import type { Product } from '@/interfaces'
import { schemaCreateProduct } from '@/validations'
import { type InferType } from 'yup'

type Data =
  | { message: string }
  | {
    from: number
    to: number
    total: number
    products: Product[]
  }
  | Product

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  switch (req.method) {
    case 'GET':
      getProducts(req, res)
      return
    case 'POST':
      createProduct(req, res)
      return
    default:
      res.status(400).json({ message: 'método no perrmitodo' })
  }
}

interface SearchQuery {
  q: string
  areas: string
  status: string
  page: string
}

const getProducts = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> => {
  const DATA_POR_PAGE = 20

  const { areas, q, status, page } = req.query as unknown as SearchQuery
  const searchProduct = q ?? undefined
  try {
    const pageData =
      page === '1' || page === undefined
        ? 0
        : Number(req.query.page)
    const areasAsArrayNumber =
      areas === undefined || areas === ''
        ? undefined
        : areas?.split(',').map((area) => Number(area))
    const statusAsNumber =
      status === undefined || status === ''
        ? undefined
        : Number(status)

    const skip = DATA_POR_PAGE * pageData

    const total = await prisma.products.findMany({
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
      total: total.length,
      from,
      to,
      products: products as unknown as Product[]
    })
  } catch (error) {
    res.status(400).json({ message: 'No se pudo obtener los productos' })
  }
}
const createProduct = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> => {
  const body = req.body as InferType<typeof schemaCreateProduct>
  try {
    const isValid = schemaCreateProduct.isValidSync(body)

    if (!isValid) {
      res.status(400).json({ message: 'Faltan datos y/o no son válidos' })
      return
    }
    const productExistsById = await prisma.products.findUnique({
      where: {
        id: body.id
      }
    })
    if (productExistsById !== undefined && productExistsById !== null) {
      res
        .status(400)
        .json({ message: `Ya existe un producto con el id ${body.id}` })
      return
    }
    const productExistByName = await prisma.products.findFirst({
      where: {
        name: body.name
      }
    })
    if (productExistByName !== undefined && productExistByName !== null) {
      res
        .status(400)
        .json({ message: `Ya existe un producto con el nombre ${body.name}` })
      return
    }

    const product = await prisma.products.create({
      data: {
        id: body.id.toUpperCase(),
        name: body.name,
        price: body.price,
        stock: body.stock,
        area_id: body.areas.id,
        status_id: body.status.active ? 2 : 1,
        products_type_id: body.products_types.id
      },
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

    res.status(200).json(product as unknown as Product)
  } catch (error) {
    res.status(400).json({ message: 'No se pudo crear el producto' })
  }
}
