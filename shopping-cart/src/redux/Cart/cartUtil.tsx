import { Item } from '../../components/CollectionItem/CollectionItem'

export const addItemTocart = (
  cartItems: Item[],
  cartItemToAdd: Item,
): Item[] => {
  const item = cartItems.find((item) => item.id === cartItemToAdd.id)
  if (item) {
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item,
    )
  } else {
    return [...cartItems, cartItemToAdd]
  }
}

export const removeItemFromcart = (
  cartItems: Item[],
  cartItemToAdd: Item,
): Item[] => {
  const item = cartItems.find((item) => item.id === cartItemToAdd.id)
  if (item!.quantity === 1) {
    cartItems.splice(cartItems.indexOf(item!))
    return [...cartItems]
  } else {
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    )
  }
}
