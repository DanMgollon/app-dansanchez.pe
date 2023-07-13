import { prisma } from '../../prisma/prismaClient'

export const dbTokenExists = async (token: string): Promise<boolean | null> => {
  try {
    const existsToken = await prisma.$queryRaw`EXEC sp_obtener_token_usuario ${token}`
    return existsToken !== null && existsToken !== undefined
  } catch (error) {
    return null
  }
}
