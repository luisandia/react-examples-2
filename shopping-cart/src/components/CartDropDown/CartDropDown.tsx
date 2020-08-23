import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButtom from '../CustomButtom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/RootReducer'
import CartItem from '../CardItem'
import { selectCartItems } from '../../redux/Cart/cartSelector'
import { Item } from '../CollectionItem/CollectionItem'
import { useHistory } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/Cart/cartAction'

const CartDropDown: React.FunctionComponent = () => {
  const cartItems = useSelector<RootState, Item[]>(selectCartItems)
  let history = useHistory()
  const dispatch = useDispatch()

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your Cart is empty</span>
        )}
        <CustomButtom
          onClick={() => {
            dispatch(toggleCartHidden())
            history.push('/checkout')
          }}
        >
          GO TO CHECKOUT
        </CustomButtom>
      </div>
    </div>
  )
}

export default CartDropDown
