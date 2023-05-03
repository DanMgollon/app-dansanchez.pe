import Link from 'next/link'
import { useRouter } from 'next/router'
import type { FC } from 'react'
import type { IconType } from 'react-icons'

interface Props {
  title: string
  href: string
  Icon: IconType
}

export const MenuListItem: FC<Props> = ({ title, href, Icon }) => {
  const { pathname } = useRouter()
  return (
    <li
      key={title}
      className={`${pathname === href ? 'bg-neutral-950' : ''} py-3 px-5`}
    >
      <Link
        href={href}
        className={`flex items-center gap-4 text-[16px] hover:text-white  shadow-sm ${
          pathname === href ? 'text-white' : 'text-gray-400'
        }`}
      >
        <Icon size={22} />
        <span className="text-gray-600 text-inherit font-bold">{title}</span>
      </Link>
    </li>
  )
}
