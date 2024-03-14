import { Link } from '../Link.jsx'
export default function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <img src='https://unavatar.io/yeltsinbl' alt='Foto de Yeltsin' />
      <p>Hola...! Me llamo Yeltsin y estoy aprendiendo React Router desde Cero con Midudev</p>
      <Link to='/'>Ir a la home </Link>
    </>
  )
}
