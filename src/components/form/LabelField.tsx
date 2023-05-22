import type { FC } from 'react'

interface Props {
  label: string
  htmlFor: string
}

export const LabelField: FC<Props> = ({ label, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className='block text-sm mb-2 text-slate-500'>{label}</label>
  )
}
