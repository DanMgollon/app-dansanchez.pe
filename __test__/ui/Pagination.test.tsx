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

    expect(screen.getByText('<')).toBeInTheDocument()
    expect(screen.getByText('>')).toBeInTheDocument()
    expect(liElements.length).toBe(pageCount - 1)
    expect(liElements[0].className).toBe(
      'bg-blue-700 rounded border border-gray-300 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 cursor-pointer'
    )
  })
})
