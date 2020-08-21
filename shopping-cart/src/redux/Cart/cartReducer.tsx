import { cartActionTypes } from './cartTypes'
import { Action } from 'redux'

interface cartType {
  hidden: boolean
}

const initialState: cartType = {
  hidden: true,
}

export interface toggleCartHiddenAction
  extends Action<typeof cartActionTypes.TOGGLE_CART_HIDDEN> {}

export default (
  state = initialState,
  action: toggleCartHiddenAction,
): cartType => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden }
    default:
      return state
  }
}
