import { navigate } from '../Link.jsx'

export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es la pagina principal de ejemplo</p>
      <button onClick={() => navigate('/about')}>Ir a sobre nosotros</button>
    </>
  )
}
