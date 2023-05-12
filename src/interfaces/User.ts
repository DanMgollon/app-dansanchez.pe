import type { Security } from './Security'

export interface User {
  id: number
  username: string
  email: string
}

export interface UserCreate extends Security, User {}

export interface UserLoginResponse {
  user: User
  token: string
}
