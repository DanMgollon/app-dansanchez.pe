import { useDebounce } from '@/hooks'
import { renderHook } from '@testing-library/react'

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})

describe('Test en useDebounce.ts', () => {
  test('El useDebounce debe retornar una funcion debounce', () => {
    const { result } = renderHook(() => useDebounce())

    expect(result.current).toBeInstanceOf(Function)
    expect(result.current.name).toBe('debounce')
  })

  test('La funcion "debounce" debe funcionar', () => {
    const { result } = renderHook(() => useDebounce())
    const callback = jest.fn()
    const time = 1000

    result.current(callback, time)
    expect(callback).not.toBeCalled()

    jest.runAllTimers()

    expect(callback).toBeCalled()
  })
})
