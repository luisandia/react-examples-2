import React, { ReactElement } from 'react'
import CollectionsOverView from '../../components/CollectionsOverview/CollectionsOverView'

interface Props {}

const ShopPage: React.FC<Props> = (props): ReactElement => {
  return (
    <div className="shop-page">
      <CollectionsOverView />
    </div>
  )
}

export default ShopPage
