import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'

import { RootState } from '../RootReducer'

interface Collection {
  [key: string]: number
}

const COLLECTION_ID_MAP: Collection = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
}

export const selectShop = (state: RootState) => state.shop

export const SelectshopList = createSelector([selectShop], (shop) => shop)

export const selectCollection = memoize((CollectionUrlParam: string) =>
  createSelector([selectShop], (shop) =>
    shop.find(
      (collection) => collection.id == COLLECTION_ID_MAP[CollectionUrlParam],
    ),
  ),
)
