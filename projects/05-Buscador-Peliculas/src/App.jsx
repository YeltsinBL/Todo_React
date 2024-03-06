import './App.css'
import { useEffect, useRef, useState } from 'react'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'

function App () {
  const { movies } = useMovies()

  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const inputRef = useRef() // se guardará la referencia del input

  const handleSubmit = (event) => {
    event.preventDefault() // evitar el comportamiento por defecto
    // const { query } = Object.fromEntries( // si existiera mas de un input, con esto se agruparían en un json
    //   new window.FormData(event.target) // Recuperar el valor del input
    // )
    console.log({ query })
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(event.target.value) // Recuperar el valor del input y actualizamos el estado
  }

  useEffect(() => {
    if (query === '') {
      setError('No se puede buscar una película vacía')
      return
    }
    if (query.match(/^\d+$/)) {
      setError('No se puede buscar una película con un numero')
      return
    }
    if (query.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres ')
      return
    }
    setError(null)
  }, [query])

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

            <input
              style={{
                border: '1px solid transparent',
                borderColor: error ? 'red' : 'transparent'
              }}
              onChange={handleChange} value={query} name='query' type='text' placeholder='Avenger, Star Wars, The Matrix'
            />
            {/* <input ref={inputRef} type='text' placeholder='Avenger, Star Wars, The Matrix' /> */}
            <button type='submit'>Buscar</button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </header>
        <main>
          <Movies movies={movies} />
        </main>
      </div>
    </>
  )
}

export default App
