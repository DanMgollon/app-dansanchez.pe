import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../prisma/prismaClient'
import { schemaUpdateProduct } from '@/validations'
import type { Product } from '@/interfaces'
import { type InferType } from 'yup'

type Data =
  | { message: string }
  | Product

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> {
  switch (req.method) {
    case 'PUT':
      editProduct(req, res)
      return
    default:
      res.status(400).json({ message: 'método no perrmitodo' })
  }
}

const editProduct = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
  const body = req.body as InferType<typeof schemaUpdateProduct>

  const isValid = schemaUpdateProduct.isValidSync(body)
  if (!isValid) {
    res.status(400).json({ message: 'Faltan datos y/o datos no válidos en la petición' })
    return
  }
  const id = req.query.id as string

  try {
    const product = await prisma.products.findUnique({ where: { id } })
    if (product === undefined) {
      res.status(400).json({ message: `El producto con el id ${id} no existe` })
    }

    const productUpdate = await prisma.products.update({
      where: {
        id
      },
      data: {
        name: body.name,
        price: body.price,
        stock: body.stock,
        area_id: body.areas.id,
        status_id: body.status.active ? 2 : 1,
        products_type_id: Number(body.products_types.id)
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
    res.status(200).json(productUpdate as unknown as Product)
  } catch (error) {
    res.status(400).json({ message: 'Error al editar el producto' })
  }
}
