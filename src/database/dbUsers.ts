import { type User } from '@/interfaces'
import { prisma } from '../../prisma'
import { bcrypt } from '@/utils'

export const checkUserPassword = async (username: string, password: string): Promise<User | null> => {
  try {
    const user = await prisma.users.findFirst({ where: { username } })

    if (user === null) return null
    const matchPassword = bcrypt.comparePassword(password, user.password)
    if (!matchPassword) return null

    const { id, email } = user
    return { id, username, email }
  } catch (error) {
    return null
  }
}
