import React, { ReactElement } from 'react'
import CollectionsOverView from '../../components/CollectionsOverview/CollectionsOverView'
import { Route, RouteComponentProps } from 'react-router-dom'
import CategoryPage from '../Collection/CollectionPage'

export interface ShopPageRouteParams {
  categoryId: string
}
interface Props
  extends Pick<RouteComponentProps<ShopPageRouteParams>, 'history' | 'match'> {}

const ShopPage: React.FC<Props> = (props): ReactElement => {
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${props.match.path}`}
        component={CollectionsOverView}
      />
      <Route
        path={`${props.match.path}/:categoryId`}
        component={CategoryPage}
      />
    </div>
  )
}

export default ShopPage
