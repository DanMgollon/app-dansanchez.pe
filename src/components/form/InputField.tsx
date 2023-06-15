import type { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'
import { useId, forwardRef } from 'react'
import { LabelField } from './LabelField'
import type { UseFormRegisterReturn } from 'react-hook-form'
import Input from './Input'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  type: HTMLInputTypeAttribute
  placeholder?: string
  register?: UseFormRegisterReturn
}

export const InputField = forwardRef<any, Props>(
  ({ label, type = 'text', placeholder, disabled, ...rest }, ref) => {
    const id = useId()
    return (
      <>
        <LabelField label={label} htmlFor={id} />
        <Input
          type={type}
          id={id}
          placeholder={placeholder}
          disabled={disabled}
          {...rest}
          ref={ref}
        />
      </>
    )
  }
)
