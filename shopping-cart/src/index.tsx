import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store, { persistorStore } from './redux/RootReducer'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <PersistGate persistor={persistorStore}>
          <App />
        </PersistGate>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
