import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAR_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function App () {
  const [fact, setFact] = useState()

  // para hacer las peticiones
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json()) // cambiar la respuesta a json
      .then(data => setFact(data.fact)) // almacenamos en el estado
  }, []) // se ejecuta la primera vez que se renderiza el componente

  return (
    <main>
      <h1>App de gatos</h1>
      {fact && <p>{fact}</p>}

    </main>
  )
}
