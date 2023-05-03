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
        <div className="flex w-full min-h-screen">
          <Sidebar />
          <section className="w-full h-full grow">
            <Navbar />
            <main className="p-2">{children}</main>
          </section>
        </div>
      </section>
    </>
  )
}
