import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as ShoppingIcon } from 'src/assets/shopping-bag.svg'
import { toggleCartHidden } from 'src/redux/Cart/cartAction'
import { selectCartItemsCount } from 'src/redux/Cart/cartSelector'
import './cart-icon.styles.scss'

interface Props {}

const CartIcon: React.FC<Props> = () => {
  const dispatch = useDispatch()
  const accumulatedQuantity = useSelector(selectCartItemsCount)

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{accumulatedQuantity}</span>
    </div>
  )
}

export default CartIcon
