import { type FC, useMemo, useEffect } from 'react'
import { InputField, LabelField } from '../form'
import Select from 'react-select'
import { CiSearch } from 'react-icons/ci'
import { type Area } from '@/interfaces'
import { Controller, useForm, useWatch } from 'react-hook-form'
import { useProductStore } from '@/store'
import { useDebounce } from '@/hooks'

const OPTIONS_STATUS = [
  { value: '', label: 'Todos' },
  { value: '1', label: 'No Activo' },
  { value: '2', label: 'Activo' }
]

interface Props {
  areas: Area[]
}

interface FilterState {
  productSearch: string
  status: string
  areasSelected: Array<{ label: string, value: number }>
}

interface SelectOptions {
  value: string
  label: string
}

export const FilterProducts: FC<Props> = ({ areas }) => {
  const { control } = useForm<FilterState>()
  const [productSearch, status, areasSelected] = useWatch({
    control,
    name: ['productSearch', 'status', 'areasSelected']
  })
  const getProducts = useProductStore((state) => state.getProducts)
  const debounce = useDebounce()

  const areasOptions = useMemo(() => {
    return areas.map((area) => ({
      label: area.name,
      value: area.id
    }))
  }, [areas])

  useEffect(() => {
    const areasSelectedAsString = areasSelected
      ?.map((area) => Number(area.value))
      .join('%2C')
    const statusAsString = (status as unknown as SelectOptions)?.value

    debounce(() => {
      getProducts(productSearch, areasSelectedAsString, statusAsString)
    }, 700)
  }, [productSearch, status, areasSelected])

  return (
    <section>
      <div className="px-1">
        <div className="flex gap-2 items-center mb-2">
          <div className="w-3/4 relative">
            <Controller
              name="productSearch"
              control={control}
              render={({ field }) => (
                <>
                  <InputField
                    type="text"
                    label="Buscar producto"
                    placeholder="Buscar"
                    className="relative pl-10"
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
          <div className="w-1/4">
            <LabelField label="Estado" />
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Select
                  options={OPTIONS_STATUS}
                  placeholder="Estado"
                  {...field}
                />
              )}
            />
          </div>
        </div>
        <div className="w-full">
          <LabelField label="Area (Opciones multiples)" />
          <Controller
            name="areasSelected"
            control={control}
            render={({ field }) => (
              <Select
                options={areasOptions}
                placeholder="Area"
                isMulti
                isClearable
                {...field}
              />
            )}
          />
        </div>
      </div>
    </section>
  )
}
