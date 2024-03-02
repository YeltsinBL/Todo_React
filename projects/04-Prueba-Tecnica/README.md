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
