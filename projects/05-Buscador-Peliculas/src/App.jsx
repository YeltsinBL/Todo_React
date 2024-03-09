import './App.css'
import { useCallback, useRef, useState } from 'react'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'
import debounce from 'just-debounce-it' // realizar la ejecución del código cada cierto tiempo

function App () {
  const [sort, setSort] = useState(false) // ordenar películas por año
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const inputRef = useRef() // se guardará la referencia del input
  const debounceGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300) // ejecutar la búsqueda cada 3 seg => 300 milisegundo
    , [getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault() // evitar el comportamiento por defecto
    // const { query } = Object.fromEntries( // si existiera mas de un input, con esto se agruparían en un json
    //   new window.FormData(event.target) // Recuperar el valor del input
    // )
    // console.log({ search })
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value // Recuperar el valor del input
    updateSearch(newSearch) // actualizamos el estado
    debounceGetMovies(newSearch) // buscar películas cada vez que se escribe
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

            <input
              style={{
                border: '1px solid transparent',
                borderColor: error ? 'red' : 'transparent'
              }}
              onChange={handleChange} value={search} name='query' type='text' placeholder='Avenger, Star Wars, The Matrix'
            />
            {/* <input ref={inputRef} type='text' placeholder='Avenger, Star Wars, The Matrix' /> */}
            <input type='checkbox' onChange={handleSort} checked={sort} />
            <button type='submit'>Buscar</button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </header>
        <main>
          {
            loading
              ? <p>Cargando</p>
              : <Movies movies={movies} />
          }
        </main>
      </div>
    </>
  )
}

export default App
