import React, { ReactElement } from 'react'
import { Route } from 'react-router-dom'
import CollectionsOverView from '../../components/CollectionsOverview/CollectionsOverView'
import CategoryPage from '../Collection/CollectionPage'
import { Navigate, Routes } from 'react-router-dom'

export interface ShopPageRouteParams {
  categoryId: string
}
interface Props {}

const ShopPage: React.FC<Props> = (): ReactElement => {
  return (
    <div className="shop-page">
      <Routes>
        <Route path="" element={<CollectionsOverView />} />
        <Route path=":categoryId" element={<CategoryPage />} />
      </Routes>
    </div>
  )
}

export default ShopPage
