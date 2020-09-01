import { CaseReducer, createSlice } from '@reduxjs/toolkit'
import SHOP_DATA, { ShopData } from '../../pages/ShopPage/shop-data'

const initialState: ShopData = SHOP_DATA

type State = typeof initialState

const shopList: CaseReducer<State> = (state) => state

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    shopList,
  },
})
