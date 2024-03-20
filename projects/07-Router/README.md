# Crear un React Router desde Cero

✅ Instalar el linter

✅ Crear una forma de hacer MPAs (Multiple Page Application)

✅ Crea una forma de hacer SPAs (Single Page Applications)

✅ Poder navegar entre páginas con el botón de atrás

✅ Crear componente Link para hacerlo declarativo

✅ Crear componente Router para hacerlo más declarativo

✅ Soportar ruta por defecto (404)

✅ Soportar rutas con parámetros

✅ Componente para hacerlo declarativo

✅ Lazy Loading de las rutas

✅ Hacer un i18n con las rutas

✅ Testing

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
- Soportar ruta por defecto (404)
  - Se crea un nuevo componente que se le pasará en el parámetro por defecto de la función del Router.jsx
- Soportar rutas con parámetros
  - Instalamos la dependencia de Regexp `npm install path-to-regexp -E`
  - Modificamos la lógica de la función del Router para utilizar el 'match' del `path-to-regexp`.
  - Al momento de iterar el array con las rutas, indicamos que evalúe si existe rutas dinámicas, de existir lo agregamos en una variable que se le pasará a componente como parámetro.
  - En la función de este componente se debe de agregar como parámetro el valor que recibirá y asi poder utilizarlo dentro de ella.
  - En el App.jsx agregamos otra ruta indicando el ':query' que será la ruta dinámica (parámetro).
- Componente para hacerlo declarativo
  - Se crea un componente Route que servirá como 'puente' para pasar los 'path' y 'Component' al Router.jsx donde está la lógica de los routers.
  - Se modifica el App.jsx para que utilice el nuevo componente Route pasándole los valores correspondientes a los 'path' y 'Component'.
  - En la función del Router agregamos como prop el 'children' que es quien recibirá los valores del 'path' y 'Component'  como array, si no se pasa como array se tiene que convertirlo a uno.
  - Utilizamos el 'Children.map' de React para poder iterar el prop children y obtenemos su 'props' y 'type' del mismo.
    - El prop contiene los valores 'path' y 'Component'
    - El type indica si es el componente Route.
  - Verificamos si se esta utilizando el componente Route para devolver el props.
  - En una constante guardamos la concatenación de los valores del prop con el routers que recibe la función como parámetro y lo iteramos.
    - Reemplazamos la iteración del routers por esta nueva constante.
- Lazy Loading de las rutas
  - Usamos el 'Lazy' de React:
    - permite importar de forma dinámica los componentes.
    - No renderiza los componentes hasta que los necesitemos.
  - Se le debe de indicar a React que tendrá una parte de la UI que no estará disponible desde el principio y por ello se envuelve una parte de la aplicación con el componente '<Suspense/>' de React, que indica que está en estado suspendido.
  - Usando un 'fallback' dentro del Suspense, se puede agregar un loader o lo que deseamos antes de mostrar el componente que se requiere.
- Hacer un i18n con las rutas
  - Creamos una constante de array con los datos en español e ingles para poder diferenciar en que idioma queremos los textos.
  - En este caso, en la propia ruta se agregó como path el valor del idioma.
- Testing
  - Instalamos dependencias
    - Vitest: para haces los test.
    - Vitest/ui: para ver los test en la web.
    - Happy-Dom: para simular un árbol de elementos, como un navegador sin tener un navegador.
    - @testing-library/react: renderiza y se pregunta si existe el componente, elemento, acciones, etc.
  - En la configuración de vite.config, indicamos que el entorno donde se ejecutarán los test es en `happy-dom`.
  - Creamos el archivo 'Router.test.jsx' para hacer los test a los routers.
    - Limpiar la pantalla (html) y mockups al ejecutar cada test.
    - Test del Router sin path.
    - Test del Router sin path pero con DefaultComponent para buscar el texto dentro del html.
    - Test del Router pasando los routers (path y component) y buscar el texto dentro del html.
    - Test haciendo la navegación click en el Link y buscar el texto en el html del nuevo renderizado.
