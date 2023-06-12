import { ButtonPrimary } from '@/ui'
import { useMemo, useEffect } from 'react'
import type { FC, FormEvent } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { ErrorForm, InputField } from '../form'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { salesRegisterCustomerSchema } from '@/validations'
import { useSalesStore } from '@/store'
import { formatterMoney } from '../../utils/formatterMoney'
import { useUserDNI } from '@/store/useUserDNI'
import { shallow } from 'zustand/shallow'

interface FormState {
  dni: string
}

export const SaleData: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
    getValues
  } = useForm<FormState>({
    resolver: yupResolver(salesRegisterCustomerSchema)
  })
  const { fullName, searchUserDNI, isSearching, errorDNI } = useUserDNI(
    (state) => ({
      fullName: state.fullName,
      searchUserDNI: state.searchUserDNI,
      isSearching: state.isSearching,
      errorDNI: state.errorDNI
    }),
    shallow
  )
  const newSale = useSalesStore((state) => state.newSale)
  const successfullySale = useSalesStore((state) => state.successfullySale)
  const productsSales = useSalesStore((state) => state.productsSales)
  const isLoading = useSalesStore((state) => state.isLoading)
  const total = productsSales.reduce(
    (accu, curr) => accu + curr.price * curr.saleAmount,
    0
  )
  const totalFormatted = useMemo(() => formatterMoney(total), [total])

  const isDisableForm = useMemo(() => {
    return productsSales.length === 0 || isSearching
  }, [productsSales, isSearching])

  const onSumit = handleSubmit((data) => {
    const { dni } = data
    if (fullName === null) return
    newSale({ dni, customer: fullName })
  })

  useEffect(() => {
    if (successfullySale) {
      reset({ dni: '' }, { keepValues: false })
    }
  }, [successfullySale])

  const handleBlur = async (): Promise<void> => {
    const dni = getValues('dni')
    if (dni === '' || dni === undefined) return
    if (dni.length < 8) return
    searchUserDNI(dni)
  }

  const handleInput = (evt: FormEvent<HTMLInputElement>): void => {
    const value = evt.currentTarget.value
    if (value.length > 8) {
      evt.currentTarget.value = value.slice(0, 8)
    }
  }

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
                  id="dni"
                  label="DNI"
                  type="number"
                  placeholder="Ingrese el DNI del cliente"
                  autoComplete="off"
                  maxLength={8}
                  {...field}
                  disabled={isDisableForm}
                  onBlur={handleBlur}
                  onInput={handleInput}
                />
              )}
            />
            {errors.dni !== undefined && (
              <ErrorForm message={errors.dni.message as string} />
            )}
          </div>
          <div className="mb-5">
            <InputField
              label="Cliente"
              type="text"
              placeholder="Ingrese el nombre del cliente"
              autoComplete="off"
              disabled={true}
              value={fullName ?? ''}
              readOnly
            />
          </div>
          {errorDNI !== null && <ErrorForm message={errorDNI} />}
          <span className="block border border-b-1 border-gray-100 mb-5"></span>
          <div>
            <ButtonPrimary
              className="w-full flex gap-2 justify-center items-center"
              disabled={isDisableForm}
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
