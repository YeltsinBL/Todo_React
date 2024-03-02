import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAR_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/'

export function App () {
  const [fact, setFact] = useState()
  const [imageId, setImageId] = useState()

  // para obtener la cita
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json()) // cambiar la respuesta a json
      .then(data => {
        const { fact } = data
        setFact(fact)
      }) // almacenamos en el estado
  }, []) // se ejecuta la primera vez que se renderiza el componente

  // recuperar el Id la imagen de la petición anterior
  useEffect(() => {
    if (!fact) return
    // obtener las primeras 3 palabras
    const threeFirstWord = fact.split(' ', 3).join(' ')
    fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { _id: id } = response
        setImageId(id)
      })
  }, [fact])
  return (
    <main>
      <h1>App de gatos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageId && <img src={`${CAT_PREFIX_IMAGE_URL}${imageId}`} alt={`Imagen extracted using thr first three words for ${fact}`} />}
      </section>
    </main>
  )
}
