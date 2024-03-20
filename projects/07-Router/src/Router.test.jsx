import { describe, it, expect, beforeEach, vi } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { Router } from './Router.jsx'
import { Route } from './Route.jsx'
import { Link } from './Link.jsx'
import { getCurrentPath } from './utils.js'

vi.mock('./utils.js', () => ({
  getCurrentPath: vi.fn()
}))

describe('Router', () => {
  beforeEach(() => { // se ejecuta antes de cada test
    cleanup() // limpia la pantalla al hacer los test
    vi.clearAllMocks() // limpiar todos los mocks realizados cuando se ejecuta cada test
  })

  it('should render without problems', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })

  it('should render 404 if no routers match', () => {
    render(<Router routers={[]} defaultComponent={() => <h1>404</h1>} />)
    // console.log(screen.debug()) // ver en consola el html
    // se espera que en el screen exista un texto 404
    expect(screen.getByText(404)).toBeTruthy()
  })

  it('should render the component of the first router that matches', () => {
    getCurrentPath.mockReturnValue('/about')

    const routers = [
      {
        path: '/',
        Component: () => <h1>Home</h1>
      },
      {
        path: '/about',
        Component: () => <h1>About</h1>
      }
    ]

    render(<Router routers={routers} />)
    expect(screen.getByText('About')).toBeTruthy()
  })

  it('should navigate using Links', () => {
    getCurrentPath.mockReturnValueOnce('/')

    render(
      <Router>
        <Route
          path='/' Component={() => {
            return (
              <>
                <h1>Home</h1>
                <Link to='/about'> Go to About</Link>
              </>
            )
          }}
        />
        <Route
          path='/about' Component={() => <h1>About</h1>}
        />
      </Router>
    )

    // click en el link
    const anchor = screen.getByText(/Go to About/)
    fireEvent.click(anchor)

    // hace la búsqueda para encontrar About en el html de la nueva ruta
    const aboutTitle = screen.findByText('About')

    // revisar si se ha renderizado la nueva ruta
    expect(aboutTitle).toBeTruthy()
  })
})
