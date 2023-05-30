import { newSalesSchema } from '@/validations'
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../prisma/prismaClient'
import type * as yup from 'yup'

interface Data {
  message: string
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  switch (req.method) {
    case 'POST':
      newSale(req, res)
      break
    default:
      res.status(400).json({
        message: 'Método no permitido'
      })
  }
}

const newSale = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> => {
  const isValid = newSalesSchema.isValidSync(req.body)
  if (!isValid) {
    res.status(400).json({
      message: 'Data no válida y/o faltan propiedades'
    })
    return
  }

  try {
    const { userId, customer, dni, products } = req.body as yup.InferType<
      typeof newSalesSchema
    >

    const sale = await prisma.sales.create({
      data: {
        dni,
        customer,
        users_id: userId
      }
    })

    products?.forEach(async (item) => {
      await prisma.sales_details.create({
        data: {
          producto_id: item.productId,
          sales_id: sale.id,
          quantity: item.amount
        }
      })
    })

    res.status(200).json({
      message: 'Venta creada con éxito'
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Error al crear la venta'
    })
  }
}
