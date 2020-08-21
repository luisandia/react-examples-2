import React from 'react'
import { ReactComponent as ShoppingIcon } from 'src/assets/shopping-bag.svg'

import './cart-icon.styles.scss'
import { useDispatch } from 'react-redux'
import { toggleCartHidden } from '../../redux/Cart/cartAction'

interface Props {}

const CardIcon: React.FC<Props> = () => {
  const dispatch = useDispatch()

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}

export default CardIcon
