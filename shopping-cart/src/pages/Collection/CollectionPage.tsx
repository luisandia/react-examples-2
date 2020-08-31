import React from 'react'
import './collection.styles.scss'
import { RouteComponentProps } from 'react-router-dom'
import { selectCollection } from 'src/redux/Shop/shopSelector'
import { useSelector } from 'react-redux'
import { ShopPageRouteParams } from '../ShopPage/ShopPage'
import { RootState } from 'src/redux/RootReducer'

interface Props
  extends Pick<RouteComponentProps<ShopPageRouteParams>, 'history' | 'match'> {}

const CollectionPage: React.FC<Props> = ({ match }) => {
  const accumulatedQuantity = useSelector<RootState>((state) =>
    selectCollection(match.params.categoryId)(state),
  )

  return (
    <div className="collection-page">
      <h2>COLLECTION PAGE {JSON.stringify(accumulatedQuantity)}</h2>
    </div>
  )
}

export default CollectionPage
