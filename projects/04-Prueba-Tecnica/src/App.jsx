import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App () {
  const { fact, getRefreshRandomFact } = useCatFact()
  const { imageURL } = useCatImage({ fact })

  const handleClick = async () => {
    getRefreshRandomFact()
  }
  return (
    <main>
      <h1>App de gatos</h1>
      <button onClick={handleClick}>Get new fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageURL && <img src={imageURL} alt={`Imagen extracted using thr first three words for ${fact}`} />}
      </section>
    </main>
  )
}
