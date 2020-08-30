import React, { ReactElement } from 'react'
import { SHOP_DATA, ShopData } from './shop-data'
import { PreviewCollection } from '../../components/PreviewCollection/PreviewCollection'
import './collection-preview.styles.scss'
import { RootState } from '../../redux/RootReducer'
import { createStructuredSelector } from 'reselect'
import { SelectshopList } from '../../redux/Shop/shopSelector'
import { useSelector } from 'react-redux'
interface Props {}

interface Result {
  collections: ShopData[]
}

const structuredSelector = createStructuredSelector<RootState, Result>({
  collections: SelectshopList,
})

const ShopPage: React.FC<Props> = (props): ReactElement => {
  const { collections } = useSelector<RootState, Result>((state) =>
    structuredSelector(state),
  )

  return (
    <div className="shop-page">
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

export default ShopPage
