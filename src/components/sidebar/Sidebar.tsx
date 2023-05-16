import React from 'react'
import type { FC } from 'react'
import { MenuList } from './MenuList'

export const Sidebar: FC = () => {
  return (
    <header className='basis-[280px] bg-neutral-800 py-4 flex-shrink-0 h-screen sticky top-0'>
      <MenuList />
    </header>
  )
}
