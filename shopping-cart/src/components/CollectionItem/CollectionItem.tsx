import React from 'react'
import './collection-item.styles.scss'

export interface Item {
  id: number
  name: string
  imageUrl: string
  price: number
}

interface Props {
  item: Item
}

export const CollectionItem: React.FC<Props> = ({
  item: { id, name, imageUrl, price },
}) => {
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
    </div>
  )
}
