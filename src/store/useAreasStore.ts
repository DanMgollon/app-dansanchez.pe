import type { Area } from '@/interfaces'
import { createAreaService, deleteAreaService, getAreasService, updateAreaService } from '@/services'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { useUIStore } from '@/store'

interface AreasState {
  loading: boolean
  areas: Area[]
  error: string | null
}

interface Actions {
  loadAreas: () => void
  updateArea: (newAreaa: Area) => void
  createArea: (name: string, active: boolean) => void
  deleteArea: (id: number) => void
}

export const useAreasStore = create<AreasState & Actions>()(
  devtools((set, get) => ({
    areas: [],
    loading: true,
    error: null,
    loadAreas: async () => {
      try {
        const areas = await getAreasService()
        set(() => ({ areas }))
      } catch (error) {
        const message = (error as Error).message
        set(() => ({ error: message }))
        setTimeout(() => { set(() => ({ error: null })) }
          , 50)
      } finally {
        set(() => ({ loading: false }))
      }
    },
    updateArea: async (newArea) => {
      const { setModalArea } = useUIStore.getState()
      try {
        await updateAreaService(newArea)
        const areas = get().areas.map(area => area.id === newArea.id ? newArea : area)
        set(() => ({ areas }))
        setModalArea(false)
      } catch (error) {
        const message = (error as Error).message
        set(() => ({ error: message }))
        setTimeout(() => { set(() => ({ error: null })) }, 50)
      }
    },
    createArea: async (name, active) => {
      const { setModalArea } = useUIStore.getState()
      try {
        const area = await createAreaService(name, active)
        const areas = structuredClone(get().areas)
        areas.push(area)
        set(() => ({ areas }))
        setModalArea(false)
      } catch (error) {
        const message = (error as Error).message
        set(() => ({ error: message }))
        setTimeout(() => { set(() => ({ error: null })) }, 50)
      }
    },
    deleteArea: async (id) => {
      try {
        await deleteAreaService(id)
        const areasStatate = get().areas
        const newAreas = areasStatate.filter(area => area.id !== id)
        set(() => ({ areas: newAreas }))
      } catch (error) {
        const message = (error as Error).message
        set(() => ({ error: message }))

        setTimeout(() => { set(() => ({ error: null })) }, 50)
      }
    }
  }))
)
