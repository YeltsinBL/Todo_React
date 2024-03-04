import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()
  const getRefreshRandomFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  // para obtener la cita
  useEffect(getRefreshRandomFact
    , []) // se ejecuta la primera vez que se renderiza el componente
  return { fact, getRefreshRandomFact }
}
