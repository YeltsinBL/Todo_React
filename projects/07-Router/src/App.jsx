import { useEffect, useState } from 'react'
import './App.css'

const NAVIGATION_EVENT = 'pushstate'
function navigate (href) {
  // cambia la URL sin actualizar la página
  window.history.pushState({}, '', href)
  // crear evento personalizado que avisa cuando se cambia de url
  const navigateEvent = new Event(NAVIGATION_EVENT)
  // usamos el evento en el dispatch para que lo usen
  window.dispatchEvent(navigateEvent)
}

function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es la pagina principal de ejemplo</p>
      <button onClick={() => navigate('/about')}>Ir a sobre nosotros</button>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <img src='https://unavatar.io/yeltsinbl' alt='Foto de Yeltsin' />
      <p>Hola...! Me llamo Yeltsin y estoy aprendiendo React Router desde Cero con Midudev</p>
      <button onClick={() => navigate('/')}>Ir a la home </button>
    </>
  )
}

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  useEffect(() => {
    // actualizamos el estado cuando cambien la URL
    const onLocalChange = () => {
      setCurrentPath(window.location.pathname)
    }
    // Agregamos al evento el callback
    window.addEventListener(NAVIGATION_EVENT, onLocalChange)

    return () => {
      // removemos el evento
      window.removeEventListener(NAVIGATION_EVENT, onLocalChange)
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
