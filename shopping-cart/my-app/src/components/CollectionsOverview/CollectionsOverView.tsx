import React from 'react'
import { useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ShopDetail } from '../../pages/ShopPage/shop-data'
import { RootState } from '../../redux/RootReducer'
import { selectShopForOverView } from '../../redux/Shop/shopSelector'
import { PreviewCollection } from '../PreviewCollection/PreviewCollection'
import './collections-overview.styles.scss'

interface Props {}

interface Result {
  collections: ShopDetail[]
}

const structuredSelector = createStructuredSelector<RootState, Result>({
  collections: selectShopForOverView,
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
