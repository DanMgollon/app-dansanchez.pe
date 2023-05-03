import type { FC } from 'react'
import { IoExitOutline } from 'react-icons/io5'

export const Navbar: FC = () => {
  return (
    <header className="bg-white shadow-sm py-3 px-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Ferretería JR</h1>

        <button
          className="flex items-center gap-2 rounded-lg py-1 px-4 border border-red-500 text-red-500 hover:bg-red-200
        hover:text-red-700  transition-all"
        >
          <IoExitOutline size={18} />
          Salir
        </button>
      </div>
    </header>
  )
}
