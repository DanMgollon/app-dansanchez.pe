import type { ReactNode, SelectHTMLAttributes } from 'react'
import { useId, forwardRef } from 'react'
import { LabelField } from './LabelField'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode
  label: string
}

export const Select = forwardRef<any, Props>(({ label, children, ...rest }, ref) => {
  const id = useId()
  return (
    <>
      <LabelField label={label} htmlFor={id} />
      <select
        id={id}
        className='w-full border bg-slate-50 border-slate-300 outline-none rounded-md py-2 px-3 text-sm focus:shadow'
        {...rest}
        ref={ref}
      >
        {children}
      </select>
    </>
  )
})
