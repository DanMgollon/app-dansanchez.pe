import { useEffect, type FC } from 'react'
import { InputField } from '../form'
import { useForm, Controller, useWatch } from 'react-hook-form'
import { useDebounce } from '@/hooks'
import { CiSearch } from 'react-icons/ci'
import { useSalesStore } from '../../store/useSalesStore'
import { shallow } from 'zustand/shallow'

interface FormState {
  customer: string
}

export const SaleSearch: FC = () => {
  const { control } = useForm<FormState>({
    defaultValues: {
      customer: ''
    }
  })
  const debounce = useDebounce()
  const customerWatch = useWatch({ control, name: 'customer' })
  const { getSales, changeSalesPage } = useSalesStore(
    (state) => ({
      getSales: state.getSales,
      changeSalesPage: state.changeSalesPage
    }),
    shallow
  )

  useEffect(() => {
    debounce(() => {
      changeSalesPage(1)
      getSales(customerWatch)
    }, 500)
  }, [customerWatch])

  return (
    <section className="w-full px-1">
      <div className="relative">
        <Controller
          control={control}
          name="customer"
          render={({ field }) => (
            <>
              <InputField
                label="Buscar venta"
                type="search"
                placeholder="Nombre del cliente"
                className="pl-10"
                autoComplete="off"
                {...field}
              />
              <CiSearch
                className="absolute bottom-[8px] left-[8px] text-gray-500"
                size={20}
              />
            </>
          )}
        />
      </div>
    </section>
  )
}
