# Todo_React

Iniciando en la programación con React.

- React no renderiza una cadena de texto HTML, solo renderiza elementos.
- Solo re-renderiza el DOM donde ha ocurrido un cambio y no en todos los elementos de la UI.
- Si se renderiza un componente padre, los hijos también se renderizan.

## Dependencias

```S
# Install Standard -Desarrollo: para formatear el código
npm i standard -D
```

## Projects

- 01-Twitter-Card
  - Creación del las tarjetas de twitter para seguir a los usuarios.
  - Utilización de React.Fragment, components, props, hooks(useState).
- 02-Tic-Tac-Toe
  - Creación de componentes para el tablero, los cuadros y mostrar al ganador.
  - Almacenar en el LocalStorage la partida y turno.
  - Uso del UseState para los distintos estados.
  - Agregar dependencia pra el efecto de confetti.
- 03-Mouse-Follower
  - Uso del UseState y UseEffect
  - Obtener la posición del mouse para agregarle un seguidor.
  - Ocultar el mouse.

## Producción

Para verificar lo realizado en producción se puede hacer lo siguiente:

- Ejecutar el siguiente comando para que se cree la carpeta `dist`, que contendrá los archivos para producción.

```S
# comando para producción
npm run build
```

- Utilizar la pagina `Netlify Drop` para desplegar a producción, subiendo la carpeta `dist`, que creará una URL con el proyecto desplegado
