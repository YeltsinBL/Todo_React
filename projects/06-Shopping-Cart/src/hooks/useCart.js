import { useContext } from 'react'
import { CartContext } from '../context/cart'

export const useCart = () => {
  const cart = useContext(CartContext)

  // revisar si el contexto a sido leído
  // si es undefined quiere decir que se esta utilizando el CustomHook en un lugar que no se puede,
  // porque esa parte de la aplicación no esta envuelta en un Provider
  if (cart === undefined) {
    throw new Error('useCart debe usarse dentro de un CartProvider ')
  }
  return cart
}
