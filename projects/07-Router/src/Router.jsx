import { useEffect, useState, Children } from 'react'
import { EVENTS } from './consts.js'
import { match } from 'path-to-regexp'

export function Router ({ children, routers = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  useEffect(() => {
    // actualizamos el estado cuando cambien la URL
    const onLocalChange = () => {
      setCurrentPath(window.location.pathname)
    }
    // Agregamos al evento el callback
    window.addEventListener(EVENTS.PUSH_STATE, onLocalChange)
    // Retroceder a la pagina anterior con el botón de atrás del navegador
    window.addEventListener(EVENTS.POP_STATE, onLocalChange)

    return () => {
      // removemos el evento
      window.removeEventListener(EVENTS.PUSH_STATE, onLocalChange)
      window.removeEventListener(EVENTS.POP_STATE, onLocalChange)
    }
  }, [])

  let routeParams = {}

  // agregamos las rutas que vienen del <Route/> componente
  const routersFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'
    return isRoute ? props : null
  })

  const routeToUse = routers.concat(routersFromChildren)

  // Iteramos el array y buscamos el path para comparar si es el mismo del estado actual
  // si es el mismo obtenemos el component
  const Page = routeToUse.find(({ path }) => {
    if (path === currentPath) return true

    // se usa path-to-regexp para detectar rutas dinámicas
    // como por ejemplo 'search/:query' :query es una ruta dinámica
    // match: devuelve otra función que permitirá compararlo con el currentPath
    // al path debemos de pasarle como se va a decodificar la URL
    const matchUrl = match(path, { decode: decodeURIComponent })
    const matched = matchUrl(currentPath)
    if (!matched) return false // no encontró query

    // guarda los parámetros de la url dinámica que se extrajo usando path-to-regexp
    // si la ruta es 'search/:query' y la url es '/search/react'
    // matched.params.query === 'react'
    routeParams = matched.params // esto devuelve {query: 'valor'}
    return true
  })?.Component
  return Page ? <Page routeParams={routeParams} /> : <DefaultComponent routeParams={routeParams} />
}
