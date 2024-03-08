# Buscador de Películas

Enunciado
Crea una aplicación para buscar películas

API a usar: - `https://www.omdbapi.com/` Consigue la API Key en la propia página web registrando tu email.

Requerimientos:

✅ Necesita mostrar un input para buscar la película y un botón para buscar.

✅ Lista las películas y muestra el título, año y poster.

✅ Que el formulario funcione

✅ Haz que las películas se muestren en un grid responsive.

- Hacer el fetching de datos a la API

Primera iteración:

- Evitar que se haga la misma búsqueda dos veces seguidas.

- Haz que la búsqueda se haga automáticamente al escribir.

- Evita que se haga la búsqueda continuamente al escribir (debounce)

## Proceso

- Se utilizó `Water.css` para el diseño inicial de la web.
- Para mostrar la lista de las películas, el título, año y poster, se utilizó un mapeo de datos para la respuesta del api y CustomHooks para separar la lógica del archivo principal.
- Para obtener el valor del input, se hizo de dos formas, obteniéndolo directamente usando JS y otra usando UseRef.
- Se uso UseEffect para realizar las validaciones del input del formulario y UseState para mostrar el mensaje de error.

> Nota:
>
> - UseRef: permite crear una referencia mutable que persiste todo el ciclo de vida del componente y guarda cualquier valor que se pueda mutar y cada vez que cambia, no vuelve a renderizar el componente. También guarda la referencia del DOM.
> - UseState: cada vez que cambia el valor, se renderiza el componente
