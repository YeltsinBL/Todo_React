import { lazy, Suspense } from 'react' // permite importar de forma dinámica los componentes hasta que se use
import './App.css'
// importaciones estáticas
// import HomePage from './pages/Home.jsx'
// import AboutPage from './pages/About.jsx'
import Page404 from './pages/404.jsx'
import SearchPage from './pages/Search.jsx'
import { Router } from './Router.jsx'
import { Route } from './Route.jsx'

// import dinámico: cuando se realiza con una promesa
const LazyHomePage = lazy(() => import('./pages/Home.jsx'))
const LazyAboutPage = lazy(() => import('./pages/About.jsx'))
// extraer las rutas que se tiene en un array de objetos
const routes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routers={routes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
