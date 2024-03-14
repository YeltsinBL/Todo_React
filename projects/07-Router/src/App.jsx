import { useEffect, useState } from 'react'
import './App.css'
import { EVENTS } from './consts.js'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'

function App () {
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

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
