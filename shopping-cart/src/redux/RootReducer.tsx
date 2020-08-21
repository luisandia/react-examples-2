import { combineReducers, createStore, applyMiddleware } from 'redux'
import userReducer from './User/UserReducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const middlewares = [logger]
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
)

export default store
