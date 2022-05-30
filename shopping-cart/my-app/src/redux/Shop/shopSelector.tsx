import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'

import { RootState } from '../RootReducer'

export const selectShop = (state: RootState) => state.shop

export const selectShopForOverView = createSelector([selectShop], (shop) =>
  Object.keys(shop).map((key) => shop[key]),
)

export const SelectshopList = createSelector([selectShop], (shop) => shop)

export const selectCollection = memoize((CollectionUrlParam: string) =>
  createSelector([selectShop], (shop) => shop[CollectionUrlParam]),
)
