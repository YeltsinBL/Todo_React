import responsiveMovies from '../mocks/with_result.json'
import withoutResult from '../mocks/no_result.json'

export function useMovies () {
  const movies = responsiveMovies.Search
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))
  return { movies: mappedMovies }
}
