import { createSlice } from '@reduxjs/toolkit'
import { Item } from '../../components/CollectionItem/CollectionItem'
import { addItemTocart, removeItemFromcart } from './cartUtil'

interface cartType {
  hidden: boolean
  cartItems: Item[]
}

const initialState: cartType = {
  hidden: true,
  cartItems: [],
}
export interface toggleCartHiddenAction {
  payload: Item
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCartHidden: (state) => {
      state.hidden = !state.hidden
    },
    addItem: (state, action: toggleCartHiddenAction) => {
      state.cartItems = addItemTocart(state.cartItems, action.payload)
    },
    clearItemFromCart: (state, action: toggleCartHiddenAction) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      )
    },
    removeItem: (state, action: toggleCartHiddenAction) => {
      state.cartItems = removeItemFromcart(state.cartItems, action.payload)
    },
  },
})

export const {
  toggleCartHidden,
  addItem,
  removeItem,
  clearItemFromCart,
} = cartSlice.actions
