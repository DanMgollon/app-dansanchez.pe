import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../prisma'
import type { User } from '../../interfaces/User'
import { bcrypt } from '@/utils'

type Data =
  | { message: string }
  | { message: User }

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  try {
    const passwordEncrypted = bcrypt.hashPassword('123456')
    const user = await prisma.users.create({
      data: {
        username: 'ferreteria',
        email: 'ferreteria@gmail.com',
        password: passwordEncrypted
      }
    })
    res.status(200).json({ message: user })
  } catch (error) {
    res.json({ message: 'Error al insertar los datos' })
  }
}
