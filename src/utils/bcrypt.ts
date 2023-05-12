import bycript from 'bcrypt'

const comparePassword = (password: string, passwordEncrypted: string): boolean => {
  if (password === undefined || passwordEncrypted === undefined) return false

  return bycript.compareSync(password, passwordEncrypted)
}

export default {
  comparePassword
}
