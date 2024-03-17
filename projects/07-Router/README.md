# Crear un React Router desde Cero

✅ Instalar el linter

✅ Crear una forma de hacer MPAs (Multiple Page Application)

✅ Crea una forma de hacer SPAs (Single Page Applications)

✅ Poder navegar entre páginas con el botón de atrás

✅ Crear componente Link para hacerlo declarativo

✅ Crear componente Router para hacerlo más declarativo

 Soportar ruta por defecto (404)

 Soportar rutas con parámetros

 Componente para hacerlo declarativo

 Lazy Loading de las rutas

 Hacer un i18n con las rutas

 Testing

 Publicar el paquete en NPM

## Proceso

- Crear una forma de hacer MPAs (Multiple Page Application)
  - Se hizo con UseState y con condicionales para mostrar la página.
- Crea una forma de hacer SPAs (Single Page Applications)
  - Se usó el UseEffect para que se ejecute única vez cuando cargue la primera vez de la pagina.
  - Actualizamos el estado del UseState cuando se cambie la URL.
  _ Nos suscribimos al evento creado para que haga la actualización del estado y luego removemos el evento.
  - En los botones se usa la función para navegar, donde se agregó la forma de no recargar toda la página al cambiar la URL.
- Navegar entre páginas con el botón de atrás del navegador
  - En el UseEffect, se agregó otro EventListener con el `popstate` para poder retroceder porque en el anterior solo funcionaba la pagina hacia adelante con el `pushestate`
- Componente Link para hacerlo declarativo
  - Se creó el componente que recibe todas las propiedades del `<a/>` mediante los props.
  - Este componente tiene la lógica para hacer click y presionar a la vez los botones del teclado.
  - Usa el `navigate` para evitar recargar la página cuando cambia la URL.
  - Devuelve un `<a/>` con todas sus propiedad que se le pasaron en las props.
  - En el Home.jsx y About.jsx, se cambio el uso del navigate para que ahora use el componente del Link pasándole el path de la URL y el children.
- Componente Router para hacerlo más declarativo
  - Extraer las rutas que se tiene en un array de objetos, asi se puede agregar mas rutas si es necesario fácilmente.
  - Router.jsx: se crea una función que recibirá como parámetro el array de las rutas y por defecto tendrá un componente que indicará la ruta no encontrada.
    - Se extrae toda la lógica del router realizado en el App.jsx y lo agregamos en esta función.
    - Al fina de la lógica extraída, iteramos el array y buscamos el path para comparar si es el mismo del estado actual, si es el mismo obtenemos el componente, de lo contrario, mostrará el componente por defecto.
