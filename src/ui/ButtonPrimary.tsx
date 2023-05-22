import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { Spinner } from './Spinner'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  isLoading?: boolean
}
export const ButtonPrimary: FC<Props> = ({
  children,
  type,
  className,
  isLoading,
  disabled,
  ...rest
}) => {
  return (
    <button
      type={type}
      className={`w-full bg-blue-600 text-white hover:bg-blue-700 rounded-md py-2 px-4 font-bold ${
        className as string
      } ${isLoading === true ? 'grayscale' : 'grayscale-0'}`}
      {...rest}
      disabled={isLoading === true}
    >
      {isLoading === true ? <Spinner /> : children}
    </button>
  )
}
