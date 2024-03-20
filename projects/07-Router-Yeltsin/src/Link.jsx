import { BUTTONS, EVENTS } from './consts.js'

export function navigate (href) {
  // cambia la URL sin actualizar la página
  window.history.pushState({}, '', href)
  // crear evento personalizado que avisa cuando se cambia de url
  const navigateEvent = new Event(EVENTS.PUSH_STATE)
  // usamos el evento en el dispatch para que lo usen
  window.dispatchEvent(navigateEvent)
}
/**
 *
 * @param {target} target Por si se quiere abrir en otra ventana
 * @param {to} to Destino
 * @param {...props} ...props Otros parámetros si se necesita
 * @returns
 */
export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    // Opciones de los botones del teclado
    const isMainEvent = event.button === BUTTONS.PRIMARY /// click principal
    // Command || option || Control || Shift
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    // saber si el target se abre en si mismo, en la misma página o en otra
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      // evitamos el comportamiento por defecto para que no recargue toda la página
      event.preventDefault()
      // navegación con SPA
      navigate(to)
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
