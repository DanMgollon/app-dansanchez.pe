import type { Product, ProductTypes } from '@/interfaces'
import { prisma } from '../../prisma/prismaClient'

export const getProductsTypes = async (): Promise<ProductTypes | null> => {
  try {
    const productTypes = await prisma.products_types.findMany({
      select: {
        id: true,
        type: true
      }
    })
    return productTypes as unknown as ProductTypes
  } catch (error) {
    return null
  }
}

export const findProductById = async (id: number): Promise<Product | null> => {
  try {
    const product = await prisma.products.findUnique({
      where: {
        id
      },
      include: {
        status: true,
        areas: true,
        products_types: true
      }
    })
    return product as unknown as Product
  } catch (error) {
    return null
  }
}