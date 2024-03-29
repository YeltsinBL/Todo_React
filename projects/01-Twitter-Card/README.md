# Twitter Card

- Inicializamos el proyecto.
- Creación del proyecto React utilizando Vite.
- Instalar las dependencias por defecto.
- Correr el proyecto

```s
# Inicializar el proyecto
npm init -y
# Creación del proyecto con Vite
npm create vite@latest
# Instalar las dependencias
npm install
# correr el proyecto
npm run dev
```

- Utilización de React.Fragment para agregar componentes.
- Un componente es una función que crea un elemento.
  - Los componentes deben de ser PascalCase, porque no diferencia entre un elemento HTML o un componente.
  - La creación de los componentes se harán en App.jsx.
  - Para aplicar los estilos a los elementos, se les debe de pasar un objeto y no una cadena de texto.
  - Para que el componente siga siendo reutilizable incluso con los css, se debe de utilizar un selector de clase que es el `className`, porque el jsx se transforma en JS y en JS `class` es una palabra reservada.
  - También se pueden pasar como parámetros.
- Props:
  - Son los parámetros que recibe los componentes.
  - También se pueden pasar como parámetros: string, bool, number, function, elements, etc. No deben modificarse el valor de los parámetros.
  - Para realizar una evaluación en los componentes se deben realizar entre llaves.
  - Children: esta prop es una palabra especial que recibe todo lo que envuelve el elemento.
  - También se puede pasar los props como un solo objeto utilizando el rest-operator.
  - Si se utiliza una prop para inicializar un estado, solo se inicializa una vez.
- Hooks
  - Permite añadir cierta funcionalidad a los componentes de React o poder ejecutar código arbitrario cuando ocurre ciertas cosas en  los componentes o tener algún tipo de funcionalidad al mejorar el rendimiento del componente.
  - UseState: la usamos para guardar una variable, indicando si estamos siguiendo o no al usuario.
- Key
  - Identifica el elemento del array en cada componente para renderizarlo.
  - Debe ser un valor único para que no se repita en los componentes.

> Nota: un componente es una función que al ejecutarla devuelve un elemento y el elemento es lo que renderiza React.
