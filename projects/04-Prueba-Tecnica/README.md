# Prueba Técnica

## Configuración del Proyecto

- Creación del proyecto con el framework 'Vanilla' para después cambiarlo a React.
- Instalar el plugin de vite.
- Instalar React: la biblioteca de react
- ReactDOM: tiene los binding con el navegador
- Crear el archivo de la configuración de vite.
- Modificar el archivo de script que se usa en el html y cambiarlo de '.js' a '.jsx'.
- Correr el proyecto

```s
# Creación del proyecto con Vite
npm create vite@latest
# Instalar plugin con la versión exacto 
npm install @vitejs/plugin-react -E
# Instalar React y ReactDOM con la versión exacta
npm install react react-dom -E
# correr el proyecto
npm run dev
```

> Nota:
>
> Para que el proyecto acepte React el archivo, en este caso el  'main', debe estar con la extensión '.jsx'.
>
> Para continuar con la prueba técnica es importante instalar el 'eslinter' porque servirá de gran ayuda para formatear el código

## Descripción

APIs:

- Facts Random: https://catfact.ninja/fact
- Imagen random: https://cataas.com/cat/says/hello

- Recupera un hecho aleatorio de gatos de la primera API
- Recuperar la primera palabra del hecho
- Muestra una imagen de un gato con la primera palabra.

## Proceso

Recupera un hecho aleatorio de gatos de la primera API

- Uso del 'useState' para mostrar la información de los gatos.
- Uso del 'useEffect' para realizar la petición cuando se renderiza por primera vez el componente.
  - La dependencia es vacía para que se ejecute solo la primera vez que se renderiza el componente, de lo contrario se obtendrá un loop infinito.
  - El fetch se hace dentro de este hook.
