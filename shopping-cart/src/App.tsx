import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { useAuth } from './components/SignIn/useAuth'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import SignInAndSignUpPage from './pages/SignInAndSignUpPage'
import { createUserProfileDocument } from './firebase/firebase.utils'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from './redux/User/UserAction'

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
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  )
}

export default App
