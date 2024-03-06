import './App.css'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'

function App () {
  const { movies } = useMovies()
  return (
    <>
      <div className='page'>
        <h1>
          Prueba Técnica - Buscar de Películas
        </h1>
        <h3>Buscador de Películas</h3>
        <header>
          <form className='form'>
            <input type='text' placeholder='Avenger, Star Wars, The Matrix' />
            <button type='submit'>Buscar</button>
          </form>
        </header>
        <main>
          <Movies movies={movies} />
        </main>
      </div>
    </>
  )
}

export default App
