import type { Area } from '@/interfaces'
import {
  createAreaService,
  deleteAreaService,
  getAreasService,
  updateAreaService
} from '@/services'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface AreasState {
  loading: boolean
  areas: Area[]
  error: string | null
  isAdded: boolean
  isUpdated: boolean
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
    isAdded: false,
    isUpdated: false,
    loadAreas: async () => {
      try {
        const areas = await getAreasService()
        set(() => ({ areas }))
      } catch (error) {
        const message = (error as Error).message
        set(() => ({ error: message }))
        setTimeout(() => {
          set(() => ({ error: null }))
        }, 50)
      } finally {
        set(() => ({ loading: false }))
      }
    },
    updateArea: async (newArea) => {
      try {
        await updateAreaService(newArea)
        const areas = get().areas.map((area) =>
          area.id === newArea.id ? newArea : area
        )
        set(() => ({ areas }))
        set(() => ({ isUpdated: true }))
        setTimeout(() => { set(() => ({ isUpdated: false })) }, 50)
      } catch (error) {
        const message = (error as Error).message
        set(() => ({ error: message }))
        setTimeout(() => {
          set(() => ({ error: null }))
        }, 50)
      }
    },
    createArea: async (name, active) => {
      try {
        const area = await createAreaService(name, active)
        const areas = structuredClone(get().areas)
        areas.push(area)
        set(() => ({ areas }))
        set(() => ({ isAdded: true }))
        setTimeout(() => { set(() => ({ isAdded: false })) }, 50)
      } catch (error) {
        const message = (error as Error).message
        set(() => ({ error: message }))
        setTimeout(() => {
          set(() => ({ error: null }))
        }, 50)
      }
    },
    deleteArea: async (id) => {
      try {
        await deleteAreaService(id)
        const areasStatate = get().areas
        const newAreas = areasStatate.filter((area) => area.id !== id)
        set(() => ({ areas: newAreas }))
      } catch (error) {
        const message = (error as Error).message
        set(() => ({ error: message }))

        setTimeout(() => {
          set(() => ({ error: null }))
        }, 50)
      }
    }
  }))
)
