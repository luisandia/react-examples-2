import React from 'react'
import './cart-item.styles.scss'
import { Item } from '../CollectionItem/CollectionItem'

interface Props {
  item: Item
}

const CartItem = ({ item }: Props) => {
  const { imageUrl, name, price, quantity } = item
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="the cart" />
      <div className="itm-details">
        <span className="nam">{name}</span>
        <span className="price">
          {quantity} x {price}
        </span>
      </div>
    </div>
  )
}

export default CartItem
