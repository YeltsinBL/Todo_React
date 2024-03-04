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

- Facts Random: `https://catfact.ninja/fact`
- Imagen random: `https://cataas.com/cat/says/hello`

- Recupera un hecho aleatorio de gatos de la primera API
- Recuperar la primera palabra del hecho
- Muestra una imagen de un gato con la primera palabra.

## Proceso

Recupera un hecho aleatorio de gatos de la primera API

- Uso del 'useState' para mostrar la información de los gatos.
- Uso del 'useEffect'
  - El fetch se hace dentro de este hook.
  - Para recuperar la cita
    - la petición se renderiza por primera vez el componente.
    - La dependencia es vacía para que se ejecute solo la primera vez que se renderiza el componente, de lo contrario se obtendrá un loop infinito.
  - Para obtener la imagen
    - Realiza una petición con las tres primeras palabras de la cita de la petición anterior.
    - Obtenemos el Id de la imagen de la respuesta del fetch.
    - La dependencia es el estado de la cita, porque cuando cambia la cita se debe hacer otra petición para actualizar la imagen.
- Mostramos la cita e imagen, agregándole un poco de css.
- CustomHooks
  - Reutilizar lógica de los compones en otros componentes.
  - Se debe de crear una función que empiece con la palabra `use` porque asi React sabe que nos referimos a un CustomHooks.

> Nota:
>
> - La diferencia de un CustomHooks y una función, es que dentro del CustomHooks se pueden llamar a otros Hooks y en una función no.

- Test PlayWright
  - Se realizó unos test básicos referente al texto e imagen.
  - Se inicializó el PlayWright.
  - Como el proyecto usa import, se cambia la extensión del 'playwright.config.js' a 'playwright.config.cjs'.
  - En el fichero de ejemplo del test, utilizar el import para el test y expect.
  - En este caso se hará la prueba al contenido del texto y el src de la imagen.

```S
# Inicializar
npm init playwright@latest
# Configuración
yes
JavaScript
test
false
true

# Ejecutar el test
npx playwright test
# visualizar el reporte
npx playwright show-report
```
