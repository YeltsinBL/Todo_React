import { useState } from 'react'
import './App.css'

function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es la pagina principal de ejemplo</p>
      <a href='/about'>Ir a sobre nosotros</a>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <img src='https://unavatar.io/yeltsinbl' alt='Foto de Yeltsin' />
      <p>Hola...! Me llamo Yeltsin y estoy aprendiendo React Router desde Cero con Midudev</p>
      <a href='/'>Ir a la home </a>
    </>
  )
}

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
