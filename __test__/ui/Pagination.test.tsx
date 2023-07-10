import { Pagination } from '@/ui'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Test in Pagination.tsx', () => {
  const onChangePageFn = jest.fn()
  const pageCount = 10

  const props = {
    pageCount,
    onPageChange: onChangePageFn,
    forcePage: 1
  }

  test('El componente debe mostrarse correctamente', () => {
    render(<Pagination {...props} />)

    const liElements = screen.getAllByRole('listitem')

    expect(liElements.length).toBe(pageCount - 1)
    expect(liElements[0].className).toBe(
      'bg-blue-700 rounded border border-gray-300 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 cursor-pointer'
    )
  })

  test('La clase debe cambiar cuando cambie de pagina', () => {
    render(<Pagination {...props}/>)
    const firstPage = screen.getByText('1')
    const secondPage = screen.getByText('2')

    fireEvent.click(secondPage)

    expect(firstPage.parentElement?.className).toBe('bg-white rounded border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer px-4 py-2')
    expect(secondPage.parentElement?.className).toBe('bg-white rounded border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer px-4 py-2 !border-blue-400 !bg-blue-100 !hover:bg-blue-400')
  })
})
