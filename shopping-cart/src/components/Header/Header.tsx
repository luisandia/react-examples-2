import React from 'react'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { RootState } from '../../redux/RootReducer'
import './header.styles.scss'
import CardIcon from '../CardIcon'
import CartDropDown from '../CartDropDown'

interface Props {}

const Header: React.FC<Props> = () => {
  const {
    user: { currentUser: user },
    cart: { hidden },
  } = useSelector<RootState, Pick<RootState, 'cart' | 'user'>>((state) => ({
    user: state.user,
    cart: state.cart,
  }))
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="shop">
          SHOP
        </Link>
        <Link className="option" to="shop">
          CONTACT
        </Link>
        {user ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CardIcon />
      </div>
      {!hidden && <CartDropDown />}
    </div>
  )
}

export default Header
