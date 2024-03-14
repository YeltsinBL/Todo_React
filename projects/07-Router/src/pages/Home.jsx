import { Link } from '../Link.jsx'

export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es la pagina principal de ejemplo</p>
      <Link to='/about'>Ir a sobre nosotros</Link>
    </>
  )
}
