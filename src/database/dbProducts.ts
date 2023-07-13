import type { MostSelledProductsI, Product, ProductSale, ProductTypes, ProductsToExpirate } from '@/interfaces'
import { prisma } from '../../prisma/prismaClient'

export const getProductsTypes = async (): Promise<ProductTypes[] | null> => {
  try {
    const productTypes = await prisma.$queryRaw<ProductTypes[]>`EXEC sp_obtener_tipos_de_productos;`
    return productTypes
  } catch (error) {
    return null
  }
}

export const findProductById = async (id: string): Promise<Product | null> => {
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

export const getProductsActive = async (): Promise<ProductSale | null> => {
  try {
    const products = await prisma.products.findMany({
      select: {
        id: true,
        name: true,
        stock: true,
        price: true,
        products_types: {
          select: {
            type: true
          }
        }
      },
      where: {
        status: {
          active: true
        }
      }
    })
    const productsSerilized = JSON.parse(
      JSON.stringify(products)
    ) as ProductSale
    return productsSerilized
  } catch (error) {
    return null
  }
}

export const getMostSelledProducts = async (): Promise<MostSelledProductsI[] | null> => {
  try {
    const data = await prisma.$queryRaw<MostSelledProductsI[]>`EXEC sp_obtener_productos_mas_vendidos`
    return (data)
  } catch (error) {
    return null
  }
}

export const getProductsToExpirate = async (): Promise<ProductsToExpirate[] | null> => {
  try {
    const data = await prisma.$queryRaw<ProductsToExpirate[]>`EXEC sp_obtener_productos_por_expirar`
    return JSON.parse(JSON.stringify(data)) as unknown as ProductsToExpirate[]
  } catch (error) {
    return null
  }
}
