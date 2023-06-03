import { ButtonPrimary } from '@/ui'
import { type FC, useMemo, useEffect } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { ErrorForm, InputField } from '../form'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { salesRegisterCustomerSchema } from '@/validations'
import { useSalesStore } from '@/store'
import { formatterMoney } from '../../utils/formatterMoney'

interface FormState {
  customer: string
  dni: string
}

export const SaleData: FC = () => {
  const newSale = useSalesStore((state) => state.newSale)
  const successfullySale = useSalesStore((state) => state.successfullySale)
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm<FormState>({
    resolver: yupResolver(salesRegisterCustomerSchema)
  })
  const productsSales = useSalesStore((state) => state.productsSales)
  const isLoading = useSalesStore((state) => state.isLoading)
  const total = productsSales.reduce(
    (accu, curr) => accu + curr.price * curr.saleAmount,
    0
  )
  const totalFormatted = useMemo(() => formatterMoney(total), [total])

  const isDiableForm = useMemo(
    () => productsSales.length === 0,
    [productsSales]
  )

  const onSumit = handleSubmit((data) => {
    newSale(data)
  })

  useEffect(() => {
    if (successfullySale) {
      reset({
        customer: '',
        dni: ''
      })
    }
  }, [successfullySale])

  return (
    <div>
      <header className="w-full bg-blue-800 py-5 px-3 rounded-tl-md rounded-tr-md">
        <h3 className="font-black text-white text-center text-2xl">
          Total: {totalFormatted}
        </h3>
      </header>
      <div className="mb-5 px-3 py-4">
        <h3 className="font-bold text-blue-800 mb-3">Datos del cliente</h3>
        <form onSubmit={onSumit}>
          <div className="mb-3">
            <Controller
              name="dni"
              control={control}
              render={({ field }) => (
                <InputField
                  label="DNI"
                  type="number"
                  placeholder="Ingrese el DNI del cliente"
                  autoComplete="off"
                  maxLength={8}
                  {...field}
                  disabled={isDiableForm}

                />
              )}
            />
            {errors.dni !== undefined && (
              <ErrorForm message={errors.dni.message as string} />
            )}
          </div>
          <div className="mb-5">
            <Controller
              name="customer"
              control={control}
              render={({ field }) => (
                <InputField
                  label="Cliente"
                  type="text"
                  placeholder="Ingrese el nombre del cliente"
                  autoComplete="off"
                  {...field}
                  disabled={isDiableForm}
                />
              )}
            />
            {errors.customer !== undefined && (
              <ErrorForm message={errors.customer.message as string} />
            )}
          </div>

          <span className="block border border-b-1 border-gray-100 mb-5"></span>

          <div>
            <ButtonPrimary
              className="w-full flex gap-2 justify-center items-center"
              disabled={isDiableForm}
              isLoading={isLoading}
            >
              <AiOutlineShoppingCart size={20} />
              Generar venta
            </ButtonPrimary>
          </div>
        </form>
      </div>
    </div>
  )
}
