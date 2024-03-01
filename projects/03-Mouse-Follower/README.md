# Mouse-Follower

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

- UseEffect:
  - Es un hook que nos permite ejecutar código arbitrario cuando el componente se monta en el DOM y cada vez que cambian las dependencias que se le indique.
  - Se utiliza en el cuerpo del componente.
  - Contiene dos parámetros
    - Código: Solo se ejecuta una vez el código como mínimo porque cuando se monta el componente se ejecuta una vez, pero se puede hacer que se ejecute mas veces.
    - Dependencias: Si no se le pasa el segundo parámetro, entonces el código se ejecutará cada vez que se renderice el componente.
  - Cuando se devuelve una función
    - Se usa cuando deja de aparecer un componente, deja de renderizarse.
    - Se puede limpiar una suscripciones(CleanUseEffect).
    - También se puede usar cuando cambia una dependencia, limpia el efecto anterior antes de ejecutar el nuevo para que empiece desde cero.
    - Haciendo esto, evita crear nuevas suscripciones encima de otro.

> Nota: para verificar si hay suscripciones de eventos activos en la web, se puede utilizar la consola del navegador y escribir `getEventListeners(window)` para ver todas esas suscripciones, solo funciona en Chromium.
