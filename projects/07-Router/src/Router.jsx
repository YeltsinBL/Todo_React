import { useEffect, useState } from 'react'
import { EVENTS } from './consts.js'

export function Router ({ routers = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
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

  // Iteramos el array y buscamos el path para comparar si es el mismo del estado actual
  // si es el mismo obtenemos el component
  const Page = routers.find(({ path }) => path === currentPath)?.Component
  return Page ? <Page /> : <DefaultComponent />
}
