import type { FC, ReactNode } from 'react'
import { type Toast, toast } from 'react-hot-toast'
import { FiAlertCircle } from 'react-icons/fi'

interface Props {
  children: ReactNode
  t: Toast
  onDelete: () => void
}

export const ToastDelete: FC<Props> = ({ children, t, onDelete }) => {
  return (
    <div className="bg-white shadow-xl p-3 px-5 rounded-lg">
      <header className="mb-3 w-full">
        <div className="flex justify-center text-red-600 mb-1">
          <FiAlertCircle className="text-inherits text-[25px]" />
        </div>
        <p className="block w-full ">
         {children}
        </p>
      </header>
      <div className="flex gap-2">
        <button className="text-sm grow bg-red-500 rounded-md text-white py-2 hover:bg-red-700 transition-colors"
          onClick={ () => {
            onDelete()
            toast.dismiss(t.id)
          }}
        >
          Eliminar
        </button>
        <button
          className="text-sm grow bg-green-500 rounded-md text-white py-2 hover:bg-green-700 transition-colors"
          onClick={() => { toast.dismiss(t.id) }}
        >
          Cancelar
        </button>
      </div>
    </div>
  )
}
