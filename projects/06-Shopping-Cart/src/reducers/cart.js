export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []
const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

const CART_ACTION_TYPES = {

  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'

}

// UseReducer
export const cartReducer = (state, action) => {
  // Pasamos la acción que va hacer y todo el objeto para actualizar el estado (producto)
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(
        item => item.id === id
      )
      // si el producto se encuentra agregado, aumentar solo la cantidad
      if (productInCartIndex >= 0) {
      // utilizando structureClone:hace una copia profunda del array
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        updateLocalStorage(newState)
        return newState
      }
      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]

      updateLocalStorage(newState)
      return newState
    }
    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayload
      const newState = state.filter(item => item.id !== id)

      updateLocalStorage(newState)
      return newState
    }
    case CART_ACTION_TYPES.CLEAR_CART: {
      updateLocalStorage([])
      return []
    }
  }
  return state
}
