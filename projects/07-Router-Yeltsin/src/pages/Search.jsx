import { useEffect } from 'react'
import { useQueryParams } from '../index.jsx'

export default function SearchPage ({ routeParams }) {
  console.log(useQueryParams())
  useEffect(() => {
    document.title = `Has buscado ${routeParams.query}`
  }, [])

  return (
    <h1>Has buscado {routeParams.query}</h1>
  )
}
