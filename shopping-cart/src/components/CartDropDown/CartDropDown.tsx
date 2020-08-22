import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButtom from '../CustomButtom'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/RootReducer'
import CartItem from '../CardItem'

const CartDropDown: React.FunctionComponent = () => {
  const {
    cart: { cartItems },
  } = useSelector<RootState, Pick<RootState, 'cart'>>((state) => ({
    cart: state.cart,
  }))

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <CustomButtom>GO TO CHECKOUT</CustomButtom>
      </div>
    </div>
  )
}

export default CartDropDown
