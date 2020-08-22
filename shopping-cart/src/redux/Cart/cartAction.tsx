import { cartActionTypes } from './cartTypes'
import { Item } from '../../components/CollectionItem/CollectionItem'

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = (item: Item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
})
