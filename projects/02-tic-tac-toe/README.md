# Tic-Tac-Toe

- Creación del proyecto React utilizando Vite.
- Instalar las dependencias por defecto.
- Correr el proyecto
- Instalar dependencia de confetti

```s
# Creación del proyecto con Vite
npm create vite@latest
# Instalar las dependencias
npm install
# correr el proyecto
npm run dev
# Instalar confetti
npm i canvas-confetti -E
```

## Proceso

- Se creó los turnos 'X' y 'Y' en una constante enum.
- Se agregó en un estado las 9 posiciones vacías del tablero.
- Se creó los cuadros para las posiciones donde recibe las props para representar el turno jugado
  - Se agregó los turnos a un estado para saber que turno continua.
  - Se hizo el clic en los cuadros para identificar el turno que le toca jugar.
- Se creó el indicador del turno para mostrar el turno que le toca jugar.
  - Se cambia por cada clic que se haga en los cuadros.
- Mostrar el turno dentro de los cuadros de las posiciones.
  - Se crea un nuevo board para actualizar el valor de acuerdo al indice con el turno jugado y se pasa al board inicial para que lo renderice en la vista.
  - Validar que no se sobre escriba en la posición ya jugada en el tablero.
- Indicar si existe un ganador
  - Se creó un array con todas las combinaciones ganadoras.
  - Se creo un estado para el ganador.
  - Si existe un ganador ya no se podrá seguir jugando.
  - Se realizó la lógica para verificar si existe un ganador que devuelve el turno actual que ha jugado, de no existir ganador devuelve nulo.
  - Se muestra un alert si existe el ganador indicando el turno.
  - Se lanza un efecto de confetti.
- Resetear juego
  - Actualizar los estados del board, turn y winner al valor inicial de cada uno.
  - Se agregó un botón para realizar el reseteo.
- Verificar si hubo empate
  - Recorremos todas las posiciones del nuevo tablero para verificar hay alguna vacía, de estar todas con valores y se devuelve como empate.
- UseEffect:
  - Es un hook que nos permite ejecutar código arbitrario cuando el componente se monta en el DOM y cada vez que cambian las dependencias que se le indique.
  - Se utiliza en el cuerpo del componente.
  - Contiene dos parámetros
    - Código: Solo se ejecuta una vez el código como mínimo porque cuando se monta el componente se ejecuta una vez, pero se puede hacer que se ejecute mas veces.
    - Dependencias: Si no se le pasa el segundo parámetro, entonces el código se ejecutará cada vez que se renderice el componente.

> Nota:
>
> Los estados se tratan de manera inmutable, se debe de modificar usando el 'set_' pasándole, en este caso, un array nuevo al board principal y este solo se actualizará en donde se ha hecho el clic. Si se actualiza directamente sin utilizar el 'set_' puede que haya error al renderizar.
>
> Las actualizaciones de los estados son asíncronos.
>
> Los Hooks deben estar siempre en el cuerpo del componente, no deben estar dentro de un if, while, loop, etc.
