import { createSelector } from 'reselect'
import { RootState } from '../RootReducer'

export const selectShop = (state: RootState) => state.shop

export const SelectshopList = createSelector([selectShop], (shop) => shop)
