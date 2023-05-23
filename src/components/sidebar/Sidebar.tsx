import React from 'react'
import type { FC } from 'react'
import { MenuList } from './MenuList'
import { useAuthStore } from '../../store'
import { FaUserCircle } from 'react-icons/fa'
import { Navbar } from '@/components/navbar'

export const Sidebar: FC = () => {
  const user = useAuthStore(state => state.user)

  return (
    <header className='basis-[280px] bg-neutral-800 pt-4 flex-shrink-0 h-screen sticky top-0 flex flex-col rounded-tr-[40px] rounded-br-[40px] overflow-hidden'>
      <Navbar />
      <MenuList />

      <footer className='flex gap-2 items-start px-3 py-2 overflow-hidden rounded-tb-[25px]'>
        <FaUserCircle className='text-2xl text-white'/>
        <div className='-mt-1'>
          <h3 className='text-gray-300 font-semibold text-base uppercase'>{user?.username}</h3>
          <p className='text-gray-400 font-semibold text-xs'>{user?.email}</p>
        </div>
      </footer>
    </header>
  )
}
