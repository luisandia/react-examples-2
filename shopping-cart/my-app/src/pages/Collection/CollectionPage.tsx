import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CollectionItem from 'src/components/CollectionItem'
import { RootState } from 'src/redux/RootReducer'
import { selectCollection } from 'src/redux/Shop/shopSelector'
import { ShopDetail } from '../ShopPage/shop-data'
import { ShopPageRouteParams } from '../ShopPage/ShopPage'
import './collection.styles.scss'

interface Props
  {}

const CollectionPage: React.FC<Props> = () => {
  let { categoryId } = useParams<string>();
  const collection = useSelector<RootState, ShopDetail | undefined>((state) =>
    selectCollection(categoryId!)(state),
  )
  const { title, items } = collection!

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default CollectionPage
