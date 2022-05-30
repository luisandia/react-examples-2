import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { useAuth } from './components/SignIn/useAuth'
import { createUserDocumentFromAuth } from './firebase/firebase.utils'
import CheckoutPage from './pages/CheckoutPage'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import SignInAndSignUpPage from './pages/SignInAndSignUpPage'
import { setCurrentUser } from './redux/User/userSlice'

const App = () => {
  const user = useAuth()
  const dispatch = useDispatch()

  React.useEffect(() => {
    createUserDocumentFromAuth(user?.currentUser, '')
    dispatch(setCurrentUser(user))
  }, [dispatch, user])

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/signin" element={<SignInAndSignUpPage user={user} />} />
      </Routes>
    </div>
  )
}

export default App
