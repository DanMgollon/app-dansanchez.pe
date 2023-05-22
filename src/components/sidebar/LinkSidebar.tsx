import Link from 'next/link'
import { useRouter } from 'next/router'
import { type FC } from 'react'
import type { IconType } from 'react-icons'

interface Props {
  name: string
  Icon: IconType
  path: string
}
export const LinkSidebar: FC<Props> = ({ name, Icon, path }) => {
  const { pathname } = useRouter()
  return (
    <Link
      href={path}
      className={`px-5 flex items-center text-base gap-4 font-bold hover:text-white ${
        pathname === path ? 'text-white' : 'text-gray-400'
      }`}
    >
      <Icon className="text-[22px] text-inherit" />
      {name}
    </Link>
  )
}
