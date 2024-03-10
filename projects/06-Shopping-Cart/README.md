# Shopping Cart

Ecommerce

✅ Muestra una lista de productos que vienen de un JSON
✅ Añade un filtro por categoría
✅ Añade un filtro por precio
Haz uso de useContext para evitar pasar props innecesarias.

Carrito:

 Haz que se puedan añadir los productos a un carrito.
 Haz que se puedan eliminar los productos del carrito.
 Haz que se puedan modificar la cantidad de productos del carrito.
 Sincroniza los cambios del carrito con la lista de productos.
 Guarda en un localStorage el carrito para que se recupere al recargar la página. (da puntos)

## Proceso

- Se usó el UseState para los cambios en el filtro.
  - En App.jsx para guardar los parámetros del filtro
  - En Filters.jsx para guardar el cambio del precio.
  - PropDrilling: parar las props por varios componentes hasta llegar al componente que lo usará.

> Nota: Hooks
>
> - UseId: genera un identificador único que siempre va hacer el mismo y ademas funciona con ServerSideRendering
