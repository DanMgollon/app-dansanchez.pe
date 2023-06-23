import type { User } from '@/interfaces'
import { useAreasStore, useAuthStore } from '@/store'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import type { ReactNode, FC } from 'react'

interface Props {
  children: ReactNode
}

export const Auth: FC<Props> = ({ children }) => {
  const { data, status } = useSession()
  const loginUser = useAuthStore(state => state.loginUser)
  const loadAreas = useAreasStore(state => state.loadAreas)

  useEffect(() => {
    if (status === 'authenticated') {
      loginUser(data.user as User)
    }
  }, [data, status])

  useEffect(() => {
    loadAreas()
  }, [])

  return (
    <>
      {children}
    </>
  )
}
