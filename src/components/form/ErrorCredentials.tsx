import { RiErrorWarningLine } from 'react-icons/ri'
import type { FC } from 'react'

interface Props {
  showError: boolean
  message: string
}

export const ErrorCredentials: FC<Props> = ({ showError, message }) => {
  if (!showError) return <></>
  return (
    <div className='bg-red-100 border border-red-700 font-medium px-4 py-2 rounded-lg mb-4'>
      <p className='text-red-700 inline-flex gap-2 items-center'>
        <RiErrorWarningLine size={22}/>
        {message}
      </p>
    </div>
  )
}
