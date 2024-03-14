import { EVENTS } from './consts'

export function navigate (href) {
  // cambia la URL sin actualizar la página
  window.history.pushState({}, '', href)
  // crear evento personalizado que avisa cuando se cambia de url
  const navigateEvent = new Event(EVENTS.PUSH_STATE)
  // usamos el evento en el dispatch para que lo usen
  window.dispatchEvent(navigateEvent)
}
