import React from 'react'
import './checkout-item.styles.scss'
import { Item } from '../CollectionItem/CollectionItem'

interface Props {
  item: Item
}

const CheckoutItem: React.FC<Props> = ({
  item: { name, imageUrl, quantity, price },
}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="reemove-button">&#1005;</div>
    </div>
  )
}

export default CheckoutItem
