export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []
const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

const CART_ACTION_TYPES = {

  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'

}

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const { id } = action.payload
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
        ...action.payload, // productos
        quantity: 1
      }
    ]

    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { id } = action.payload
    const newState = state.filter(item => item.id !== id)

    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    updateLocalStorage([])
    return []
  }
}

// UseReducer
export const cartReducer = (state, action) => {
  // Pasamos la acción que va hacer y todo el objeto para actualizar el estado (producto)
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}
