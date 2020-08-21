import { combineReducers, createStore, applyMiddleware } from 'redux'
import userReducer from './User/userReducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import cartReducer from './Cart/cartReducer'

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const middlewares = [logger]
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
)

export default store
