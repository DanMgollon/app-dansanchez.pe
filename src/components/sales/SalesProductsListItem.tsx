import { type ProductsSalesStore } from '@/interfaces'
import { type FocusEvent, useMemo, type FC } from 'react'

import { TabelCell, TableRow } from '../table'
import { useSalesStore } from '@/store'
import Input from '../form/Input'
import { toast } from 'react-hot-toast'
import { Controller, useForm } from 'react-hook-form'

interface Props {
  product: ProductsSalesStore
}

interface FormState {
  saleAmount: number
}

const SalesProductsList: FC<Props> = ({ product }) => {
  const updateAmount = useSalesStore(state => state.updateAmount)
  const { register, control, setValue, getValues } = useForm<FormState>({
    values: {
      saleAmount: product.saleAmount
    }
  })

  const total = useMemo(() => (product.saleAmount * product.price).toFixed(2), [product])
  const deleteProductSales = useSalesStore((state) => state.deleteProductSales)
  const incrementAmoutByOne = useSalesStore((state) => state.incrementAmoutByOne)
  const decrementAmoutByOne = useSalesStore((state) => state.decrementAmoutByOne)
  const handleDelete = (): void => {
    deleteProductSales(product.id)
  }

  const handleBlurSaleAmount = (e: FocusEvent<HTMLInputElement>): void => {
    const valueAsNumber = e.target.valueAsNumber
    if (valueAsNumber > product.stock) {
      toast.error('No hay suficiente stock', {
        position: 'top-right'
      })
      setValue('saleAmount', product.stock)
      return
    }

    if (valueAsNumber <= 0) {
      toast.error('La cantidad debe ser mayor a 0', {
        position: 'top-right'
      })
      setValue('saleAmount', 1)
      return
    }

    updateAmount(product.id, valueAsNumber)
  }
  const handleIncrementByOne = (): void => {
    if (getValues('saleAmount') >= product.stock) return
    incrementAmoutByOne(product.id)
  }
  const handleDecrementByOne = (): void => {
    if (getValues('saleAmount') <= 1) return
    decrementAmoutByOne(product.id)
  }

  return (
    <TableRow key={product.id}>
      <TabelCell scope="row" className="font-medium text-gray-800">
        {product.name}
      </TabelCell>
      <TabelCell>
        <span className="text-gray-600">{product.price}</span>
      </TabelCell>
      <TabelCell>
        <span className="text-gray-600">{product.products_types.type}</span>
      </TabelCell>
      <TabelCell>
        <span className="text-gray-600">{product.stock}</span>
      </TabelCell>
      <TabelCell>
        <div className="flex gap-2 items-center justify-center">
          <button className="bg-blue-800 text-white py-1 px-2 rounded-md hover:bg-blue-700"
            onClick={handleIncrementByOne}
          >
            +
          </button>
          <Controller
            name="saleAmount"
            control={control}
            render={({ field }) => (
              <Input
                type="number"
                className="w-auto text-center"
                register={register('saleAmount')}
                {...field}
                onBlur={handleBlurSaleAmount}
              />
            )}
          />
          <button
            className="bg-blue-800 text-white py-1 px-2 rounded-md hover:bg-blue-700"
            onClick={handleDecrementByOne}
          >
            -
          </button>
        </div>
      </TabelCell>
      <TabelCell>
        <span className="text-gray-600">{total}</span>
      </TabelCell>
      <TabelCell>
        <div className="flex justify-end gap-2">
          <button
            className="text-sm hover:underline text-red-500"
            onClick={handleDelete}
          >
            Eliminar
          </button>
        </div>
      </TabelCell>
    </TableRow>
  )
}

export default SalesProductsList
