import { Link } from '../Link.jsx'

const i18n = {
  es: {
    tittle: 'Sobre nosotros',
    button: 'Ir a la home',
    description: 'Hola...! Me llamo Yeltsin y estoy aprendiendo React Router desde Cero con Midudev'
  },
  en: {
    title: 'About us',
    button: 'Go to home',
    description: 'Hi...! My name is Yeltsin and I am learning React Router from scratch with Midudev'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')
  return (
    <>
      <h1>{i18n.title}</h1>
      <img src='https://unavatar.io/yeltsinbl' alt='Foto de Yeltsin' />
      <p>{i18n.description}</p>
      <Link to='/'>{i18n.button} </Link>
    </>
  )
}
