import { useRef } from 'react'

type ResponseData = (callback: any, time: number) => void

export const useDebounce = (): ResponseData => {
  const debounceId = useRef<NodeJS.Timeout | null>(null)

  const debounce = (callback: any, time: number): void => {
    if (debounceId.current !== null) {
      clearTimeout(debounceId.current)
    }
    const id = setTimeout(() => {
      callback()
    }, time)
    debounceId.current = id
  }
  return debounce
}
