import './App.css'
import { useRef } from 'react'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'

function App () {
  const { movies } = useMovies()

  const inputRef = useRef() // se guardará la referencia del input

  const handleSubmit = (event) => {
    event.preventDefault() // evitar el comportamiento por defecto
    const { query } = Object.fromEntries( // si existiera mas de un input, con esto se agruparían en un json
      new window.FormData(event.target) // Recuperar el valor del input
    )
    console.log(query)
  }

  const handleSubmitWithUseRef = (event) => {
    event.preventDefault() // evitar el comportamiento por defecto
    // const value = inputRef.current.value // acceder al valor de la referencia del elemento
    const inputEl = inputRef.current // recuperamos el elemento
    const value = inputEl.value // recuperamos el valor del elemento
    console.log(value)
  }
  return (
    <>
      <div className='page'>
        <h1>
          Prueba Técnica - Buscar de Películas
        </h1>
        <h3>Buscador de Películas</h3>
        <header>
          <form className='form' onSubmit={handleSubmit}>

            <input name='query' type='text' placeholder='Avenger, Star Wars, The Matrix' />
            {/* <input ref={inputRef} type='text' placeholder='Avenger, Star Wars, The Matrix' /> */}
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
