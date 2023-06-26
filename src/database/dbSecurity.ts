import { prisma } from '../../prisma/prismaClient'

export const dbTokenExists = async (token: string): Promise<boolean | null> => {
  try {
    const existsToken = await prisma.security.findFirst({
      where: {
        token
      }
    })
    return existsToken !== null && existsToken !== undefined
  } catch (error) {
    return null
  }
}
