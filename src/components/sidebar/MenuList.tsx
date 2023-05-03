import type { FC } from 'react'
import type { IconType } from 'react-icons'
import { HiOutlineHome } from 'react-icons/hi'
import { MdOutlineCategory, MdInventory } from 'react-icons/md'
import { BsCart4 } from 'react-icons/bs'
import { TbReportAnalytics } from 'react-icons/tb'
import { MenuListItem } from './MenuListItem'

interface MenuListType {
  title: string
  Icon: IconType
  href: string
}

const MENU_LIST: MenuListType[] = [
  {
    title: 'Inicio',
    Icon: HiOutlineHome,
    href: '/'
  },
  {
    title: 'Areas',
    Icon: MdOutlineCategory,
    href: '/areas'
  },
  {
    title: 'Productos',
    Icon: MdInventory,
    href: '/productos'
  },
  {
    title: 'Ventas',
    Icon: BsCart4,
    href: '/ventas'
  },
  {
    title: 'Reportes',
    Icon: TbReportAnalytics,
    href: '/reportes'
  }
]

export const MenuList: FC = () => {
  return (
    <div>
      <ul className='flex flex-col gap-y-2'>
        {MENU_LIST.map(({ title, Icon, href }, i) => (
          <MenuListItem key={title} title={title} Icon={Icon} href={href}/>
        ))}
      </ul>
    </div>
  )
}
