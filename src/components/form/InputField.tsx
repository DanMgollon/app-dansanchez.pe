import type { FC, HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'
import { useId } from 'react'
import { LabelField } from './LabelField'
import type { UseFormRegisterReturn } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  type: HTMLInputTypeAttribute
  placeholder?: string
  register?: UseFormRegisterReturn
}

export const InputField: FC<Props> = ({
  label,
  type = 'text',
  placeholder,
  register,
  className = '',
  disabled,
  ...rest
}) => {
  const id = useId()
  return (
    <>
      <LabelField label={label} htmlFor={id} />
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`w-full border border-slate-300 bg-white  outline-none rounded-md py-2 px-3 text-sm focus:outline focus:border-none focus:outline-2 focus:outline-blue-500 ${
          disabled === true ? 'bg-zinc-200' : ''
        }${className}`}
        disabled={disabled}
        // {...register}
        {...rest}
      />
    </>
  )
}
