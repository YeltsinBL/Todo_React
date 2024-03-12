# Shopping Cart

Ecommerce

✅ Muestra una lista de productos que vienen de un JSON

✅ Añade un filtro por categoría

✅ Añade un filtro por precio

✅ Haz uso de useContext para evitar pasar props innecesarias.

Carrito:

✅ Haz que se puedan añadir los productos a un carrito.

✅ Haz que se puedan eliminar los productos del carrito.

✅ Haz que se puedan modificar la cantidad de productos del carrito.

✅ Sincroniza los cambios del carrito con la lista de productos.

 Guarda en un localStorage el carrito para que se recupere al recargar la página. (da puntos)

## Proceso

- Se usó el UseState para los cambios en el filtro.
  - En App.jsx para guardar los parámetros del filtro
  - En Filters.jsx para guardar el cambio del precio.
  - PropDrilling: parar las props por varios componentes hasta llegar al componente que lo usará.
- UseId: para dar una identificador único a los elementos de los filtros.
- CustomHooks: extraer la lógica del filtro.
- Footer.jsx: visualizar el estado de los filtros.
- Agregar productos al carrito
  - Creación del Context y Provider para envolver los componentes del App.jsx y pasar el producto al UseState del Context.
  - Provider:
    - Constantes con la lógica para agregar, retirar y limpiar los productos agregados al UseState.
    - Retorna los productos agregados en el carrito, las constantes y recibe el children.
  - UseCart: verificar si el Context esta siendo utilizado correctamente y devolver los retornos .
  - Products:
    - Utilizar las constantes del Provider pasando el producto para actualizar el UseState del Context.
    - Verificar si el producto que tiene el UseState del Provider ya esta agregado en el Carrito.
    - Cambiar la vista y acción del botón del producto cuando se agregada o elimina del carrito.
  - Cart:
    - Visualizar los productos agregados.
    - Función CartItem donde recibe como parámetro los datos del producto.
    - Uso del UseId para identificar el botón del carrito.
    - Uso del UseCart para utilizar los productos agregados en el UseContext del Provider y las constantes de agregar y limpiar.
    - Iterar los productos agregados en el Provider para visualizarlos usando la función CartItem pasando estos datos y la constante de agregar.
    - Botón limpiar utilizando la constante limpiar.

> Nota: Hooks
>
> - UseId: genera un identificador único que siempre va hacer el mismo y ademas funciona con ServerSideRendering
>
> - UseContext: esta separado del árbol de los componentes y se puede leer de forma separada; almacena lógica, hooks, estados, etc. Para leer la información, la aplicación o alguna parte debe de estar envuelto en un ContextProvider, de lo contrario no se puede leer el código.
>
> - El contexto es una forma de inyección de dependencia, se puede inyectar información saltándose las props de los componentes. Se pueden hacer estados globales pero que sean pequeños o que no cambien con mucha frecuencia (configuraciones, tokens, traducciones, etc).
