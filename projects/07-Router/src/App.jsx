import './App.css'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import { Router } from './Router.jsx'

// extraer las rutas que se tiene en un array de objetos
const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  }
]

function App () {
  return (
    <main>
      <Router routers={routes} />
    </main>
  )
}

export default App
