import {
  Action,
  combineReducers,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from '@reduxjs/toolkit'
import { logger } from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { cartSlice } from './Cart/cartSlice'
import { userSlice } from './User/userSlice'
import { directorySlice } from './Directory/directorySlice'
import { shopSlice } from './Shop/shopSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['cart'],
}

const reducer = {
  user: userSlice.reducer,
  cart: cartSlice.reducer,
  directory: directorySlice.reducer,
  shop: shopSlice.reducer,
}

export const persistorReducer = persistReducer(
  persistConfig,
  combineReducers(reducer),
)

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
  logger,
]

const store = configureStore({
  reducer: persistorReducer,
  middleware,
  devTools: true,
})

export const persistorStore = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export default store
