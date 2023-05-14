import { DashboardLayout } from '@/layout'
import { useAreasStore } from '@/store'
import type { FC } from 'react'
import { useEffect } from 'react'

const AreasPage: FC = () => {
  const areas = useAreasStore(state => state.areas)
  const loadAreas = useAreasStore(state => state.loadAreas)

  useEffect(() => {
    if (areas.length === 0) {
      loadAreas()
    }
  }, [])

  return (
    <DashboardLayout title='Areas'>
      <h1>Areas page</h1>
      <code>
        {
          JSON.stringify(areas)
        }
      </code>
    </DashboardLayout>
  )
}
export default AreasPage
