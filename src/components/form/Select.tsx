import { type ReactNode, type FC, type SelectHTMLAttributes } from 'react'
import { useId } from 'react'
import { LabelField } from './LabelField'
import type { UseFormRegisterReturn } from 'react-hook-form'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode
  label: string
  register?: UseFormRegisterReturn
}

export const Select: FC<Props> = ({ label, children, register, ...rest }) => {
  const id = useId()
  return (
    <>
      <LabelField label={label} htmlFor={id} />
      <select
        id={id}
        className='w-full border bg-slate-50 border-slate-300 outline-none rounded-md py-2 px-3 text-sm focus:shadow'
        {...register}
        {...rest}
      >
        {children}
      </select>
    </>
  )
}
