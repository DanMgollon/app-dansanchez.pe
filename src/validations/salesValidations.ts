import * as yup from 'yup'

export const productSalesSchema = yup.object().shape({
  saleAmount: yup
    .number()
    .required('La cantidad es requerida')
    .min(1, 'La cantidad debe ser mayor a 0')
    .positive('La cantidad debe ser mayor a 0')
    .typeError('La cantidad debe ser un número')
})

export const salesRegisterCustomerSchema = yup.object().shape({
  customer: yup.string().required('El nombre es requerido'),
  dni: yup
    .string()
    .required('El DNI es requerido')
    .min(8, 'El DNI debe tener 8 dígitos')
})

export const newSalesSchema = yup.object().shape({
  customer: yup.string().required('El nombre es requerido'),
  dni: yup
    .string()
    .required('El DNI es requerido')
    .max(8, 'El DNI debe tener 8 dígitos')
    .min(8, 'El DNI debe tener 8 dígitos'),
  userId: yup.number().required('El usuario es requerido'),
  products: yup.array().of(
    yup.object().shape({
      productId: yup.number().required(),
      amount: yup.number().required()
    })
  )
})
