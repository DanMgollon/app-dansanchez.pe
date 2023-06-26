import type { FC } from 'react'
import { RiLockPasswordLine } from 'react-icons/ri'

interface Props {
  message: string
  isError: boolean
}

export const ResetPasswordMessage: FC<Props> = ({ isError, message }) => {
  const theme = !isError
    ? 'bg-green-100 border border-green-600 text-green-800'
    : 'bg-red-100 border border-red-600 text-red-800'
  return (
    <div className={`mt-3 flex gap-2 items-center justify-center py-2 px-4 rounded-lg font-medium ${theme}`}>
      <RiLockPasswordLine />
      <p>{message}</p>
    </div>
  )
}
