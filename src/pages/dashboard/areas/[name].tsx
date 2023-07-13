import { DashboardLayout } from '@/layout'
import { type FC, useEffect } from 'react'
import { type GetServerSideProps } from 'next'
import { findAreaByName } from '@/database/dbAreas'
import { type Area } from '@/interfaces'
import { FormArea } from '@/components/areas'
import { useAreasStore } from '@/store'
import { toast } from 'react-hot-toast'

interface Props {
  area: Area
}

const EditAreaPagae: FC<Props> = ({ area }) => {
  console.log(area)
  const updateArea = useAreasStore(state => state.updateArea)
  const isUpdated = useAreasStore(state => state.isUpdated)
  const onSubmit = (data: Area): void => {
    // eslint-disable-next-line no-param-reassign, @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    data.status.active = data.status.active === 'true'
    updateArea(data)
  }

  useEffect(() => {
    if (isUpdated) {
      toast.success('Area actualizada correctamente', {
        position: 'top-right'
      })
    }
  }, [isUpdated])

  return (
    <DashboardLayout>
      <div className="mb-5 text-3xl font-extrabold">
        <h3>
          Edita una <span className="text-blue-500">Area</span>
        </h3>
      </div>
      <div>
        <FormArea area={area} onSubmit={onSubmit}/>
      </div>
    </DashboardLayout>
  )
}

export default EditAreaPagae

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { name } = ctx.query
  const area = await findAreaByName(name as string)

  if (area === null) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  return {
    props: {
      area
    }
  }
}
