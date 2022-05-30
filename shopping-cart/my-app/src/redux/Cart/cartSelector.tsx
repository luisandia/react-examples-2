import { createSelector } from 'reselect'
import { RootState } from '../RootReducer'
export const selectCart = (state: RootState) => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems,
)

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden,
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, item) => accumulatedQuantity + item.quantity,
      0,
    ),
)

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, item) =>
      accumulatedQuantity + item.quantity * item.price,
    0,
  ),
)
