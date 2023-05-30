import { useSalesStore } from '@/store'
import { ButtonPrimary, Modal } from '@/ui'
import { useState, useEffect } from 'react'
import type { FC } from 'react'
import Select from 'react-select'
import { ErrorForm, InputField, LabelField } from '../form'
import type { Product, ProductSale, ProductsSalesStore } from '@/interfaces'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { productSalesSchema } from '@/validations'
import type { SingleValue } from 'react-select'

interface Props {
  products: Product[]
}

interface ChangeSelectType {
  value: number
  label: string
}
interface FormState {
  saleAmount: number
}

export const AddNewProduct: FC<Props> = ({ products }) => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
    getValues
  } = useForm<FormState>({
    resolver: yupResolver(productSalesSchema)
  })

  const [productSelected, setProductSelected] = useState<ProductSale | null>(null)
  const [errorStock, setErrorStock] = useState<string | null>(null)
  const [currentStock, setCurrentStock] = useState<number>(0)

  const openModal = useSalesStore((state) => state.openModal)
  const setOpenModal = useSalesStore((state) => state.setOpenModal)
  const productsSales = useSalesStore((state) => state.productsSales)
  const addProductsSales = useSalesStore((state) => state.addProductSales)

  const handleClose = (): void => {
    setOpenModal(false)
    setProductSelected(null)
    setErrorStock(null)
    setCurrentStock(0)
    reset()
  }
  const options = products.map((product) => {
    return {
      value: product.id,
      label: product.name
    }
  })

  const handleChange = (e: SingleValue<ChangeSelectType>): void => {
    const product = products.find(
      (product) => product.id === e?.value
    ) as ProductSale
    setProductSelected(product)
  }

  const onSubmit = handleSubmit((data) => {
    if (productSelected === null) return

    if (getValues('saleAmount') > currentStock) {
      setErrorStock('No hay suficiente stock')
      return
    }
    const productsSales = { ...productSelected, saleAmount: data.saleAmount }
    addProductsSales(productsSales as ProductsSalesStore, productSelected.stock)
    handleClose()
  })

  useEffect(() => {
    if (productSelected !== null) {
      const productStore = productsSales.find(item => item.id === productSelected.id) as ProductsSalesStore
      if (productStore === undefined) {
        setCurrentStock(productSelected.stock)
        return
      }

      const stock = productSelected.stock - productStore.saleAmount
      setCurrentStock(stock)
    }
  }, [productSelected])

  return (
    <Modal isOpen={openModal} onClose={handleClose}>
      <h2 className="text-lg text-blue-800 font-bold mb-5">NUEVO PRODUCTO</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <LabelField label="Producto" />
          <Select
            options={options}
            onChange={handleChange}
            placeholder="Seleccion un producto"
          />
        </div>
        <div className="mb-3">
          <InputField
            label="Tipo"
            type="text"
            disabled={true}
            defaultValue={productSelected?.products_types.type}
          />
        </div>
        <div className="mb-3">
          <InputField
            label="Precio del producto"
            type="number"
            disabled={true}
            defaultValue={productSelected?.price}
          />
        </div>
        <div className="mb-3">
          <InputField
            label="Stock disponible"
            type="number"
            disabled={true}
            value={currentStock}
          />
        </div>
        <div className="mb-3">
          <Controller
            name="saleAmount"
            control={control}
            render={({ field }) => (
              <InputField
                label="Cantidad"
                type="number"
                {...field}
                autoComplete="off"
              />
            )}
          />
          {errors.saleAmount !== null && (
            <ErrorForm message={errors.saleAmount?.message as string} />
          )}
        </div>
        <div className='mb-5'>
          {errorStock !== null && <ErrorForm message={errorStock} />}
        </div>
        <ButtonPrimary className="w-full">AGREGAR</ButtonPrimary>
      </form>
    </Modal>
  )
}
