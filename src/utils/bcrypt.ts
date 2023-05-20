import bycript from 'bcrypt'

const comparePassword = (password: string, passwordEncrypted: string): boolean => {
  if (password === undefined || passwordEncrypted === undefined) return false

  return bycript.compareSync(password, passwordEncrypted)
}

export const hashPassword = (password: string): string => {
  const salt = bycript.genSaltSync(10)
  return bycript.hashSync(password, salt)
}

export default {
  comparePassword,
  hashPassword
}
