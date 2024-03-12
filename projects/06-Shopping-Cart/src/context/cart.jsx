import { createContext, useState } from 'react'

// Creación del contexto
export const CartContext = createContext()

// Crear el provider
export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    // setCart([...cart, product])// forma sencilla de agregar al carrito

    // revisar si el producto ya esta agregado
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    // si el producto se encuentra agregado, aumentar solo la cantidad
    if (productInCartIndex >= 0) {
      // utilizando structureClone:hace una copia profunda del array
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    // si el producto no está agregado
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }]
    ))
  }
  const removeFromCart = product => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={
        {
          cart,
          addToCart,
          removeFromCart,
          clearCart
        }
    }
    >
      {children}
    </CartContext.Provider>
  )
}
