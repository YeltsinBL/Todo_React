# React + TypeScript + Vite

Aplicación Todo-App con TypeScript

## Objetivos

- ✅ Inicializar proyecto con Vite
- ✅ Añadir linter para TypeScript + React
- ✅ Añadir estilos del TodoMVC
- [ ] Listar todos los TODOs
- [ ] Poder borrar un TODO
- [ ] Marcar TODO como completado
- [ ] Añadir forma de filtrar TODOs (Footer)
- [ ] Mostrar número de TODOs pendientes (Footer)
- [ ] Añadir forma de borrar todos los TODOs completados
- [ ] Crear Header con input (Header)
- [ ] Crear un TODO (Header)
- [ ] Poder editar el texto de un TODO (Doble click)
- [ ] Añadir animaciones con AutoAnimate
- [ ] Pasar a Reducer
- [ ] Sincronizar con el backend

## Procesos

- Añadir linter para TypeScript + React
  - Se utilizó el siguiente comando en la terminal: `npm init @eslint/config`
  - Luego se configuró las especificaciones que utilice JavaScript (ESM), React, TypeScript, Browser, Guide, Standard, JavaScript y en mi caso, tuve que instalar manualmente las dependencias que se indicará en la terminar.
    - En una de las dependencias me dio error por las versiones y tuve que utilizar `--legacy-peer-deps` al final del comando.
  - En el proyecto
    - En el archivo '.eslintrc.cjs': Agregar en el "parserOptions": {
        "project":'./tsconfig.json'
    } para que reconozca las configuraciones de ese archivo.
    - En el App.tsx aparecerán los errores para las correcciones, solo agregar 'React' en la importación de react.
- Añadir estilos del TodoMVC
  - Instalamos una dependencia para utilizar los css que tiene: `npm i todomvc-app-css -E --legacy-peer-deps`
    - Uso el legacy porque tengo conflicto con las versiones.
  - Agregamos el import del css en el 'main.tsx'
  - Eliminamos el App.css y el código css de index.css.
  - Crear el fichero 'type.d.ts'.
    - Exportamos una interfaz que contendrá sus propiedad y el tipo de dato.
    - Exportamos un tipo que sera una lista de la interfaz anterior.
  - Crear el fichero Todo.tsx que contendrá el componente Todo para listar los datos.
    - Exportamos la constante Todo que es del tipo React.FC, el cual lo tipamos mediante una interfaz Prop que será una lista de objetos. Esta lista lo obtenemos del 'type.d.ts'.
    - Mapeamos este parámetro para ir listándolo con datos de prueba.
  - En el App.tsx
    - Simulamos unos datos de acuerdo a la lista del 'type.d.ts'.
    - Convertimos la función App en una constante que será del tipo 'JSX.Element'
    - Utilizamos el componente Todos y le pasamos los datos simulados.
