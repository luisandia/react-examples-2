import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from 'src/redux/Cart/cartSlice'
import CustomButtom from '../CustomButtom'
import './collection-item.styles.scss'

export interface Item {
  id: number
  name: string
  imageUrl: string
  price: number
  quantity: number
}

interface Props {
  item: Item
}

export const CollectionItem: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch()
  const { name, imageUrl, price } = item
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButtom isInverted onClick={() => dispatch(addItem(item))}>
        Add to cart
      </CustomButtom>
    </div>
  )
}
