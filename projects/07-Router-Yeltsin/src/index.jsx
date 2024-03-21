export { Router } from './Router'
export { Link } from './Link'
export { Route } from './Route'

// CustomHook para obtener los queryParams

export function useQueryParams ({ req } = {}) {
  const isServer = typeof window === 'undefined'
  if (isServer) {
    const { query } = req
    return query
  }

  const search = window.location.search
  const params = new URLSearchParams(search)
  return Object.fromEntries(params.entries())
}
