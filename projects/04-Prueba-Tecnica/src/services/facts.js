const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  return fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => res.json()) // cambiar la respuesta a json
    .then(data => {
      const { fact } = data
      return fact
    }) // almacenamos en el estado
}
