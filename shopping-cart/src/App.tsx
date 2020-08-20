import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { useAuth } from './components/SignIn/useAuth'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import SignInAndSignUpPage from './pages/SignInAndSignUpPage'
import { createUserProfileDocument } from './firebase/firebase.utils'

function App() {
  const { currentUser } = useAuth()

  createUserProfileDocument(currentUser, '')
  return (
    <div>
      <Header user={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  )
}

export default App
