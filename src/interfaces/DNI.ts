export interface APISNETResponse {
  nombres: string
  apellidoPaterno: string
  apellidoMaterno: string
  tipoDocumento: string
  numeroDocumento: string
  digitoVerificador: string
}

export interface UserDNIResponse {
  fullName: string
  dni: string
}

export interface UserDNIError {
  message: string
}
