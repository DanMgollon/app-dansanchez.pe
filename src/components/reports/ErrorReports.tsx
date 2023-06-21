import type { FC } from 'react'
import { BiErrorCircle } from 'react-icons/bi'

interface Props {
  message: string
}

export const ErrorReports: FC<Props> = ({ message }) => {
  return (
    <div className="inline-flex gap-2 items-center bg-red-100 text-red-700 font-medium text-[14px] rounded px-2 py-1">
      <BiErrorCircle className="text-[18px]" />
      <p>{message}</p>
    </div>
  )
}
