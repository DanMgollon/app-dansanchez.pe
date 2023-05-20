import type { FC } from 'react'
import { useAuthStore } from '@/store'
import { IoExitOutline } from 'react-icons/io5'
import { signOut } from 'next-auth/react'

export const ButtonLogout: FC = () => {
  const logout = useAuthStore(state => state.logout)

  const handleLogout = (): void => {
    logout()
    signOut()
  }
  return (
    <button
      className="w-full flex items-center gap-4 text-[16px] text-gray-400
       hover:text-red-500 shadow-sm font-bold py-3 px-5"
      onClick={handleLogout}
    >
      <IoExitOutline size={22} />
      Cerrar sesión
    </button>
  )
}
