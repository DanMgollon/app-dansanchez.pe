import { DashboardLayout } from '@/layout'
import { useSession } from 'next-auth/react'

export default function Home (): JSX.Element {
  const { data: session } = useSession()
  console.log({ session })
  return (
    <DashboardLayout>
      <h1>Home</h1>
    </DashboardLayout>
  )
}
