import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../prisma/prismaClient'
import crypto from 'crypto'
import { sendEmailResetPassword } from '@/services/emailServices'
import { hashPassword } from '@/utils/bcrypt'

interface Data {
  message: string
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  switch (req.method) {
    case 'GET':
      sendEmailForResetPassword(req, res)
      return
    case 'POST':
      changePassword(req, res)
      return
    default:
      res.status(400).json({ message: 'Método no permitido' })
  }
}

const sendEmailForResetPassword = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> => {
  try {
    const idUser = req.query.id as string
    const user = await prisma.users.findUnique({
      where: { id: Number(idUser) }
    })

    if (user === null || user === undefined) {
      res.status(404).json({ message: 'Usuario no encontrado' })
      return
    }

    const token = crypto.randomBytes(32).toString('hex')
    await prisma.security.update({
      data: {
        token
      },
      where: {
        user_id: Number(idUser)
      }
    })

    await sendEmailResetPassword(user.id, user.email, token)
    res.status(200).json({ message: 'Enviamos un correo para cambiar tu contraseña' })
  } catch (error) {
    res.status(400).json({ message: 'Error al enviar el correo' })
  }
}
const changePassword = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> => {
  const { token, password } = req.body
  const idUser = req.query.id as string
  try {
    const user = await prisma.users.findFirst({
      where: {
        AND: [
          { id: Number(idUser) },
          { security: { token } }
        ]
      }
    })

    if (user === null || user === undefined) {
      res.status(404).json({ message: 'Usuario no encontrado' })
      return
    }
    const passwordEncrypted = hashPassword(password)
    await prisma.users.update({
      data: {
        password: passwordEncrypted,
        security: {
          update: { token: null }
        }
      },
      where: { id: Number(idUser) }
    })

    res.status(200).json({ message: 'Contraseña actualizada CORRECTAMENTE' })
  } catch (error) {
    res.status(400).json({ message: 'Error al cambiar la contraseña' })
  }
}
