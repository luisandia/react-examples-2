import React from 'react'
import './checkout-item.styles.scss'
import { Item } from '../CollectionItem/CollectionItem'
import { useDispatch } from 'react-redux'
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/Cart/cartAction'

interface Props {
  item: Item
}

const CheckoutItem: React.FC<Props> = ({ item }) => {
  const { name, imageUrl, quantity, price } = item
  const dispatch = useDispatch()

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItem(item))}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => dispatch(addItem(item))}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(clearItemFromCart(item))}
      >
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem
