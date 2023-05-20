import React from 'react'
import type { FC } from 'react'
import { MenuList } from './MenuList'
import { useAuthStore } from '../../store'
import { FaUserCircle } from 'react-icons/fa'
import { Navbar } from '@/components/navbar'

export const Sidebar: FC = () => {
  const user = useAuthStore(state => state.user)

  return (
    <header className='basis-[280px] bg-neutral-800 pt-4 flex-shrink-0 h-screen sticky top-0 flex flex-col'>
      <Navbar />
      <MenuList />

      <footer className='flex gap-2 items-center px-3 py-2 bg-neutral-950'>
        <FaUserCircle className='text-2xl text-white'/>
        <h3 className='text-white font-semibold text-lg uppercase'>{user?.username}</h3>
      </footer>
    </header>
  )
}
