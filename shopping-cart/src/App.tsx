import React from 'react'
import { useDispatch } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { useAuth } from './components/SignIn/useAuth'
import { createUserProfileDocument } from './firebase/firebase.utils'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import SignInAndSignUpPage from './pages/SignInAndSignUpPage'
import { setCurrentUser } from './redux/User/userAction'
import CheckoutPage from './pages/CheckoutPage'

const App = () => {
  const user = useAuth()
  const dispatch = useDispatch()

  React.useEffect(() => {
    createUserProfileDocument(user.currentUser, '')
    dispatch(setCurrentUser(user))
  }, [dispatch, user])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          path="/signin"
          render={() =>
            user.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  )
}

export default App
