import { cartActionTypes } from './cartTypes'
import { Item } from '../../components/CollectionItem/CollectionItem'

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = (item: Item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
})

export const clearItemFromCart = (item: Item) => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
})

export const removeItem = (item: Item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
})
