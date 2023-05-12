import type { User } from '@/interfaces'
import { useAuthStore } from '@/store'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import type { ReactNode, FC } from 'react'

interface Props {
  children: ReactNode
}

export const Auth: FC<Props> = ({ children }) => {
  const loginUser = useAuthStore(state => state.loginUser)
  const { data, status } = useSession()

  useEffect(() => {
    if (status === 'authenticated') {
      loginUser(data.user as User)
    }
  }, [data, status])

  return (
    <>
      {children}
    </>
  )
}
