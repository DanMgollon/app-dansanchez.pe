import { Navbar } from '@/components/navbar/'
import { Sidebar } from '@/components/sidebar'
import Head from 'next/head'
import React from 'react'
import type { ReactNode, FC } from 'react'

interface Props {
  children: ReactNode
  title?: string
}

const DEFAULT_TITLE = 'Ferrertería JR'

export const DashboardLayout: FC<Props> = ({ title, children }) => {
  return (
  <>
      <Head>
        <title>{title ?? DEFAULT_TITLE}</title>
      </Head>
      <section>
        <div className="flex w-full min-h-screen items-start">
          <Sidebar />
          <section className="w-full min-screen">
            <Navbar />
              <main className='w-full h-full p-2 overflow-y-auto'>{children}</main>
          </section>
        </div>
      </section>
    </>
  )
}
