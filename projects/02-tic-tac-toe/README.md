# Tic-Tac-Toe

- Creación del proyecto React utilizando Vite.
- Instalar las dependencias por defecto.
- Correr el proyecto

```s
# Creación del proyecto con Vite
npm create vite@latest
# Instalar las dependencias
npm install
# correr el proyecto
npm run dev
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
