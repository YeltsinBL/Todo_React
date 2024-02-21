# Todo_React

Iniciando en la programación con React.

- React no renderiza una cadena de texto HTML, solo renderiza elementos.

## Projects

### 00-Hola-Mundo

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

> Nota: un componente es una función que al ejecutarla devuelve un elemento y el elemento es lo que renderiza React.
