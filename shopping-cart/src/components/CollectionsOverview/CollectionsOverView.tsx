import React from 'react'
import './collections-overview.styles.scss'
import { createStructuredSelector } from 'reselect'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/RootReducer'
import { ShopData } from '../../pages/ShopPage/shop-data'
import { SelectshopList } from '../../redux/Shop/shopSelector'
import { PreviewCollection } from '../PreviewCollection/PreviewCollection'

interface Props {}

interface Result {
  collections: ShopData[]
}

const structuredSelector = createStructuredSelector<RootState, Result>({
  collections: SelectshopList,
})

const CollectionsOverView = () => {
  const { collections } = useSelector<RootState, Result>((state) =>
    structuredSelector(state),
  )

  return (
    <div>
      {collections.map((shop) => (
        <PreviewCollection
          key={shop.id}
          title={shop.title}
          items={shop.items}
        />
      ))}
    </div>
  )
}

export default CollectionsOverView
