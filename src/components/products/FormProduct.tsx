import { ButtonPrimary } from '@/ui'
import { type FC, useEffect } from 'react'
import { IoSaveOutline } from 'react-icons/io5'
import { InputField, ErrorForm, Select } from '../form'
import { yupResolver } from '@hookform/resolvers/yup'
import type { ProductTypes, Product, Area } from '@/interfaces'
import { schemaCreateProduct } from '@/validations'
import { Controller, useForm } from 'react-hook-form'
import { useProductStore } from '@/store'

interface Props {
  onSubmit: (data: Product) => void
  product?: Product | undefined
  productsTypes: ProductTypes[]
  activeAreas: Area[]
}

export const FormProduct: FC<Props> = ({
  product,
  onSubmit,
  productsTypes,
  activeAreas
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm<Product>({
    resolver: yupResolver(schemaCreateProduct),
    values: product ?? undefined
  })
  const isLoading = useProductStore((state) => state.isLoading)
  const isCreated = useProductStore((state) => state.isCreated)

  useEffect(() => {
    if (isCreated) {
      reset()
    }
  }, [isCreated])

  console.log(errors)

  return (
    <form
      className="bg-white py-5 px-8 border shadow rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <InputField
                label="Nombre del producto"
                type="text"
                placeholder="Ej: Martillo"
                autoComplete="off"
                {...field}
              />
            )}
          />

          {errors.name !== undefined && (
            <ErrorForm message={errors.name.message as string} />
          )}
        </div>
        <div>
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <InputField
                label="Precio del producto"
                type="number"
                placeholder="Ej: 100"
                min="0"
                {...field}
                step="any"
                autoComplete="off"
              />
            )}
          />

          {errors.price !== undefined && (
            <ErrorForm message={errors.price.message as string} />
          )}
        </div>
        <div>
          <Controller
            name="stock"
            control={control}
            render={({ field }) => (
              <InputField
                label="Stock del producto"
                type="number"
                placeholder="Ej: 10"
                min="0"
                {...field}
                autoComplete="off"
              />
            )}
          />

          {errors.stock !== undefined && (
            <ErrorForm message={errors.stock.message as string} />
          )}
        </div>
        <div>
          <Controller
            name="areas.id"
            control={control}
            render={({ field }) => (
              <Select label="Area del producto" {...field}>
                <option value="">-- Selecione area --</option>
                {activeAreas?.map((area) => (
                  <option key={area.id} value={area.id} className="uppercase">
                    {area.name}
                  </option>
                ))}
              </Select>
            )}
          />
          {errors.areas?.id !== undefined && (
            <ErrorForm message={errors.areas.id.message as string} />
          )}
        </div>
        <div>
          <Controller
            name="products_types.id"
            control={control}
            render={({ field }) => (
              <Select label="Tipo de venta del producto" {...field}>
                <option value="">-- Selecione tipo --</option>
                {productsTypes.map((type) => (
                  <option key={type.id} value={type.id} className="uppercase">
                    {type.type}
                  </option>
                ))}
              </Select>
            )}
          />

          {errors.products_types?.id !== undefined && (
            <ErrorForm message={errors.products_types.id.message as string} />
          )}
        </div>
        <div>
          <Controller
            name="status.active"
            control={control}
            render={({ field }) => (
              <Select label="Estado del producto" {...field}>
                <option value="false">No Activo</option>
                <option value="true" className="block py-5">
                  Activo
                </option>
              </Select>
            )}
          />

          {errors.status?.active !== undefined && (
            <ErrorForm message={errors.status.active.message as string} />
          )}
        </div>
      </div>
      <ButtonPrimary
        className="mt-5 flex justify-center items-center gap-2"
        isLoading={isLoading}
      >
        <IoSaveOutline size={20} />
        Guardar
      </ButtonPrimary>
    </form>
  )
}
