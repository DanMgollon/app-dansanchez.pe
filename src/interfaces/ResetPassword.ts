
export interface SendEmailResetPasswordSuccess {
  message: string
}
export interface SendEmailResetPasswordError {
  message: string
}

export interface ResetPasswordQuery {
  token: string
  user: string
}

export interface ResetPasswordSuccess {
  message: string
}

export interface ResetPasswordError {
  message: string
}
