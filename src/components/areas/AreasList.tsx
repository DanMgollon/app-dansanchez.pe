import type { FC } from 'react'
import type { Area } from '@/interfaces'
import { AreaListItem } from './AreaListItem'

interface Props {
  areas: Area[]
}

export const AreasList: FC<Props> = ({ areas }) => {
  return (
    <>
      {areas.map((area) => (
        <AreaListItem key={area.id} area={area} />
      ))}
    </>
  )
}
