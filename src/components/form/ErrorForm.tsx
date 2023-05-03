import type { FC } from 'react'

interface Props {
  message: string
}

export const ErrorForm: FC<Props> = ({ message }) => {
  return (
    <p className='text-red-500'>{message}</p>
  )
}
