import { cartActionTypes } from './cartTypes'
import { Action } from 'redux'
import { Item } from 'src/components/CollectionItem/CollectionItem'
import { addItemTocart } from './cartUtil'

interface cartType {
  hidden: boolean
  cartItems: Item[]
}

const initialState: cartType = {
  hidden: true,
  cartItems: [],
}

export interface toggleCartHiddenAction
  extends Action<typeof cartActionTypes.TOGGLE_CART_HIDDEN> {
  payload: Item
}

export default (
  state = initialState,
  action: toggleCartHiddenAction,
): cartType => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden }
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemTocart(state.cartItems, action.payload),
      }
    default:
      return state
  }
}
