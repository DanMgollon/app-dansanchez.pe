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
  dni: yup
    .string()
    .required('El DNI es requerido')
    .min(8, 'El DNI debe tener 8 dígitos')
    .max(8, 'El DNI debe tener 8 dígitos')
})

export const newSalesSchema = yup.object().shape({
  products: yup
    .array()
    .of(
      yup.object().shape({
        id: yup.string().required('El id es requerido'),
        name: yup.string().required('El nombre es requerido'),
        price: yup.number().required('El precio es requerido'),
        stock: yup.number().required('El stock es requerido'),
        products_types: yup.object().shape({
          type: yup.string().required('El tipo es requerido')
        }),
        saleAmount: yup.number().required('La cantidad es requerida')
      })
    )
    .required('Debe agregar al menos un producto'),
  customer: yup.object().shape({
    customer: yup.string().required('El nombre es requerido'),
    dni: yup.string().required('El DNI es requerido')
  }),
  userId: yup.number().required('El id del usuario es requerido')
})
