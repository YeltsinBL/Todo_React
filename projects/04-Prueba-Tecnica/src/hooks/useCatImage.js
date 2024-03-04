import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/'

export // CustomHooks
function useCatImage ({ fact }) {
  const [imageId, setImageId] = useState()
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
  return { imageURL: `${CAT_PREFIX_IMAGE_URL}${imageId}` }
}
