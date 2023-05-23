import type { FC } from 'react'
import type { IconType } from 'react-icons'
import { MdOutlineCategory, MdInventory } from 'react-icons/md'
import { BsCart4, BsClipboardDataFill } from 'react-icons/bs'
import { TbReportAnalytics, TbListDetails } from 'react-icons/tb'
import { MenuListItem, ButtonLogout } from './'
import { IoAddOutline } from 'react-icons/io5'
import {
  AiOutlineHome,
  AiOutlineDatabase,
  AiOutlineShopping
} from 'react-icons/ai'
import { LinkSidebar } from './LinkSidebar'
import { HiOutlineDocumentReport } from 'react-icons/hi'

export interface Route {
  name: string
  path: string
  Icon: IconType
}
interface MenuListType {
  name: string
  Icon: IconType
  href: string
  routes: Route[]
}

const MENU_LIST: MenuListType[] = [
  {
    name: 'Areas',
    Icon: MdOutlineCategory,
    href: '/dashboard/areas',
    routes: [
      {
        name: 'Nueva Area',
        Icon: IoAddOutline,
        path: '/dashboard/areas/nueva-area'
      },
      {
        name: 'Ver Areas',
        Icon: BsClipboardDataFill,
        path: '/dashboard/areas/mostrar'
      }
    ]
  },
  {
    name: 'Productos',
    Icon: MdInventory,
    href: '/dashboard/productos',
    routes: [
      {
        name: 'Nuevo Producto',
        Icon: IoAddOutline,
        path: '/dashboard/productos/nuevo-producto'
      },
      {
        name: 'Ver Productos',
        Icon: AiOutlineDatabase,
        path: '/dashboard/productos/mostrar'
      }
    ]
  },
  {
    name: 'Ventas',
    Icon: BsCart4,
    href: '/dashboard/ventas',
    routes: [
      {
        name: 'Nueva venta',
        Icon: AiOutlineShopping,
        path: '/dashboard/ventas/nueva-venta'
      },
      {
        name: 'Ver Ventas',
        Icon: TbListDetails,
        path: '/dashboard/ventas/mostrar'
      }
    ]
  },
  {
    name: 'Reportes',
    Icon: TbReportAnalytics,
    href: '/dashboard/reportes',
    routes: [
      {
        name: 'Generar Reporte',
        Icon: HiOutlineDocumentReport,
        path: '/dashboard/reportes/nuevo-reporte'
      }
    ]
  }
]

export const MenuList: FC = () => {
  return (
    <div className="grow mt-5">
      <ul className="flex flex-col gap-y-2">
        <li>
          <LinkSidebar path="/dashboard" Icon={AiOutlineHome} name="Inicio" />
        </li>
        {MENU_LIST.map(({ name, Icon, href, routes }, i) => (
          <MenuListItem
            key={name}
            name={name}
            Icon={Icon}
            href={href}
            routes={routes}
          />
        ))}
      </ul>
      <ButtonLogout />
    </div>
  )
}
