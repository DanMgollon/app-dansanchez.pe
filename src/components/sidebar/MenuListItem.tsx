import Link from 'next/link'
import { useRouter } from 'next/router'
import type { FC } from 'react'
import { useState } from 'react'
import type { IconType } from 'react-icons'
import { RxTriangleDown } from 'react-icons/rx'
import type { Route } from './MenuList'

interface Props {
  name: string
  Icon: IconType
  href: string
  routes: Route[] | undefined
}

export const MenuListItem: FC<Props> = ({ name: title, href, Icon, routes }) => {
  const [collapse, setCollapse] = useState(false)
  const { pathname } = useRouter()
  const isCurrentRoute = pathname.startsWith(href)

  const toggleCollapse = (): void => {
    setCollapse(!collapse)
  }

  return (
    <li
      key={title}
      className={`${isCurrentRoute ? 'bg-neutral-950' : ''} py-3 px-5`}
    >
      <div className="flex gap-2 justify-between">
        <div>
          <div
            className={`flex items-center justify-between text-base ${
              isCurrentRoute ? 'text-white' : 'text-gray-400'
            }`}
          >
            <div className="flex gap-4 text-inherit font-bold hover:text-white">
              <Icon size={22} />
              <span>
                {title}
              </span>
            </div>
          </div>
        </div>
        {routes !== undefined && (
          <button onClick={toggleCollapse} className='group'>
            <RxTriangleDown className="text-gray-400 group-hover:text-white" size={20} />
          </button>
        )}
      </div>
      {(routes !== undefined) && collapse && (
        <div className={`overflow-hidden mt-2 ml-8 ${
          !collapse ? 'h-[0px]' : 'h-fit'
        } transition-all duration-500 ease-in-out`}>
          <ul
            className='mt-1 flex flex-col gap-2'
          >
            {routes?.map(({ name, Icon, path }: Route) => (
              <Link
                key={path}
                className="text-gray-400 font-semibold flex gap-3 items-center hover:text-white cursor-pointer"
                href={path}
              >
                <Icon size={20} className='text-inherit'/>
                {name}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </li>
  )
}
