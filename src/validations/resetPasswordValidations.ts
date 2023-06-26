import * as Yup from 'yup'

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'La contraseña debe de tener mínimo 6 digitos')
    .required('La contraseña es requerida'),
  confirmPassword: Yup.string()
    .min(6, 'La contraseña debe de tener mínimo 6 digitos')
    .required('La confirmacion de la contraseña es requerida')
    .oneOf([Yup.ref('password'), ''], 'Las contraseñas no coinciden')
})
