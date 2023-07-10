import Link from 'next/link'
import type { FC } from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

interface Props {
  bgClassName: string
  darkBgClassName: string
  title: string
  value: string | number
  link: string
}

export const CardHome: FC<Props> = ({ title, value, link, bgClassName, darkBgClassName }) => {
  return (
    <article className={`${bgClassName ?? ''} rounded-md h-40 relative overflow-hidden`}>
      <div className="w-full h-full flex flex-col">
        <div className="grow py-3 px-6">
          <h3 className="text-white text-4xl font-extrabold mb-2">{value}</h3>
          <p className="text-white font-normal uppercase">{title}</p>
        </div>
        <footer className={`w-full ${darkBgClassName ?? ''} py-2`}>
          <Link
            className="text-white flex gap-2 justify-center items-center hover:opacity-60"
            href={link}
          >
            Más información <HiOutlineArrowNarrowRight />
          </Link>
        </footer>
      </div>
    </article>
  )
}
