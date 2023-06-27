import { CardHome } from '@/components/home'
import { render, screen } from '@testing-library/react'

describe('Test en CardHome.tsx', () => {
  test('Debe renderizar el componente con todas sus props', () => {
    const props = {
      bgClassName: 'bg-green-400',
      darkBgClassName: 'bg-green-800',
      title: 'title',
      value: 150,
      link: '/dashboard/areas'
    }
    render(<CardHome {...props} />)
    const link: HTMLAnchorElement = screen.getByRole('link', {
      name: 'Más información'
    })
    expect(screen.getByRole('article').className).toContain(props.bgClassName)
    expect(screen.getByRole('contentinfo').className).toContain(props.darkBgClassName)
    expect(link.href).toContain(props.link)
    expect(Number(screen.getByText(props.value).textContent)).toBe(Number(props.value))
    expect(screen.getByText(props.title)).toBeTruthy()
  })
})
