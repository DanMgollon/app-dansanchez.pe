import * as yup from 'yup'

export const schemaCreateProduct = yup
  .object()
  .shape({
    name: yup.string().required('El nombre es requerido'),
    price: yup
      .number()
      .required('El precio es requerido')
      .positive('El precio debe ser mayor a 0')
      .typeError('El precio debe ser un número válido'),
    stock: yup
      .number()
      .required('El stock es requerido')
      .positive('El stock debe ser mayor a 0')
      .typeError('El precio debe ser un número válido'),
    areas: yup.object().shape({
      id: yup
        .number()
        .required('El area es requerida')
        .typeError('El tipo de producto es requerido')
    }),
    products_types: yup.object().shape({
      id: yup
        .number()
        .required('El tipo de producto es requerido')
        .typeError('El tipo de producto es requerido')
    }),
    status: yup.object().shape({
      active: yup.boolean().required('El estado es requerido')
    })
  })
  .required()

export const schemaUpdateProduct = yup
  .object()
  .shape({
    id: yup
      .number()
      .required('El id es obligatorio')
      .typeError('El id es obligatorio'),
    name: yup.string().required('El nombre es requerido'),
    price: yup
      .number()
      .required('El precio es requerido')
      .positive('El precio debe ser mayor a 0')
      .typeError('El precio debe ser un número válido'),
    stock: yup
      .number()
      .required('El stock es requerido')
      .positive('El stock debe ser mayor a 0')
      .typeError('El precio debe ser un número válido'),
    areas: yup.object().shape({
      id: yup
        .number()
        .required('El area es requerida')
        .typeError('El tipo de producto es requerido')
    }),
    products_types: yup.object().shape({
      id: yup
        .number()
        .required('El tipo de producto es requerido')
        .typeError('El tipo de producto es requerido')
    }),
    status: yup.object().shape({
      active: yup.boolean().required('El estado es requerido')
    })
  })
  .required()
