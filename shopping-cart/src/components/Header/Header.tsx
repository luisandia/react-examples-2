import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { selectCartHidden } from '../../redux/Cart/cartSelector'
import { RootState } from '../../redux/RootReducer'
import { selectCurrentUser } from '../../redux/User/userSelector'
import CartIcon from '../CartIcon'
import CartDropDown from '../CartDropDown'
import { InternalUser } from '../SignIn/useAuth'
import './header.styles.scss'

interface Props {}
interface Result {
  currentUser: InternalUser
  hidden: boolean
}

const structuredSelector = createStructuredSelector<RootState, Result>({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})

const Header: React.FC<Props> = () => {
  const { currentUser, hidden } = useSelector<RootState, Result>((state) =>
    structuredSelector(state),
  )

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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropDown />}
    </div>
  )
}

export default Header
