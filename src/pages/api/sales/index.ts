import { newSalesSchema } from '@/validations'
import type { NextApiRequest, NextApiResponse } from 'next'
import type * as yup from 'yup'
import { prisma } from '../../../../prisma/prismaClient'
import { generateNewSalePDF } from '@/components/reports'
import { uploadPFD } from '@/utils'

type Data =
  | { message: string }
  | { PDFUrl: string }

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
      message: 'Faltan datos y/o no son válidos'
    })
    return
  }
  try {
    const { products, customer, userId } = req.body as yup.InferType<
      typeof newSalesSchema
    >
    const { id, date } = await prisma.sales.create({
      data: {
        customer: customer.customer,
        dni: customer.dni,
        users_id: userId
      }
    })

    products.forEach(async (product) => {
      await prisma.sales_details.create({
        data: {
          producto_id: product.id,
          sales_id: id,
          quantity: product.saleAmount
        }
      })
    })
    const PDFAsBuffer = await generateNewSalePDF({
      products,
      customer,
      date: new Date(date as Date).toLocaleString()
    })

    const chunks: any[] = []
    PDFAsBuffer.on('data', (chunk) => {
      chunks.push(chunk)
    })

    PDFAsBuffer.on('end', async () => {
      const pdfBuffer = Buffer.concat(chunks as any)
      const url = await uploadPFD(pdfBuffer)
      await prisma.pdfs_url.create({
        data: {
          url,
          sales_id: id
        }
      })

      res.status(200).json({ PDFUrl: url })
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error al crear la venta'
    })
  }
}
