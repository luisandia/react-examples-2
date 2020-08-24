import { cartSlice } from './Cart/cartSlice'
import { logger } from 'redux-logger'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { userSlice } from './User/userSlice'

const reducer = {
  user: userSlice.reducer,
  cart: cartSlice.reducer,
}

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
  logger,
]
const store = configureStore({ reducer, middleware, devTools: true })

export type RootState = ReturnType<typeof store.getState>

export default store
