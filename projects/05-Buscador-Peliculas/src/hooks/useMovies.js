import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const previewSearch = useRef(search) // para guardar la búsqueda anterior

  // Pasar el valor del search como parámetro desde el App.jsx y no del useMovies
  const getMovies = useCallback(async ({ search }) => {
    if (search === previewSearch.current) return

    try {
      setLoading(true)
      setError(null)
      previewSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }
  , [])

  // evitar volver a ordenar las películas si no ha cambiado
  const shortedMovies = useMemo(() => {
    return (sort && movies !== null)
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: shortedMovies, getMovies, loading }
}
