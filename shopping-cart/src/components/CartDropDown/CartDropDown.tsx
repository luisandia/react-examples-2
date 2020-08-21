import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButtom from '../CustomButtom'

interface Props {}

const CartDropDown = (props: Props) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButtom>GO TO CHECKOUT</CustomButtom>
      </div>
    </div>
  )
}

export default CartDropDown
