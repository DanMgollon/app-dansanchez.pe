import type { MostSelledProductsI, Product, ProductSale, ProductTypes, ProductsToExpirate } from '@/interfaces'
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
    const data = await prisma.$queryRaw<MostSelledProductsI[]>`SELECT TOP 5 p.name AS name, SUM(sd.quantity) AS total
    FROM 
    sales_details sd
    INNER JOIN products p
    ON sd.producto_id = p.id
    GROUP BY sd.sales_id, p.name
    ORDER BY SUM(sd.quantity) DESC`
    return (data)
  } catch (error) {
    return null
  }
}

export const getProductsToExpirate = async (): Promise<ProductsToExpirate[] | null> => {
  try {
    const data = await prisma.$queryRaw<ProductsToExpirate[]>`SELECT TOP 10 p.id, p.name, 
    DATEDIFF(DAY, CONVERT(DATE, GETDATE()), DATEADD(DAY, 1, CONVERT(DATE, p.expiration_date))) AS days,
    p.expiration_date 
    FROM products p
    WHERE expiration_date IS NOT NULL 
    AND CONVERT(DATE, p.expiration_date,34) >= CONVERT(DATE, GETDATE(),34)
    AND p.expiration_date BETWEEN
    CONVERT(DATE, p.expiration_date, 34) 
    AND  
    CONVERT(DATE, DATEADD(DAY, 10,GETDATE()), 34)
    ORDER BY p.expiration_date`
    return JSON.parse(JSON.stringify(data)) as unknown as ProductsToExpirate[]
  } catch (error) {
    return null
  }
}
