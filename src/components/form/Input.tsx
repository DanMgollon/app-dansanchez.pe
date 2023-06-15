import type { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'
import { forwardRef } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type: HTMLInputTypeAttribute
  placeholder?: string
  register?: UseFormRegisterReturn
}

export const Input = forwardRef<any, Props>(
  ({ type, placeholder, disabled, className, ...rest }, ref) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full border border-slate-300 bg-white  outline-none rounded-md py-2 px-3 text-sm focus:outline focus:border-none focus:outline-2 focus:outline-blue-500 ${
          disabled === true ? 'bg-zinc-200' : ''
        }${className ?? ''}`}
        disabled={disabled}
        {...rest}
        ref={ref}
      />
    )
  }
)

export default Input
