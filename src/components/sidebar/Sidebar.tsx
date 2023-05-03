import React from 'react'
import type { FC } from 'react'
import { MenuList } from './MenuList'

export const Sidebar: FC = () => {
  return (
    <header className='basis-[300px] bg-neutral-800 py-4 flex-shrink-0'>
      <MenuList />
    </header>
  )
}
