import React from 'react'
import './checkout.styles.scss'
import { RootState } from '../../redux/RootReducer'
import { useSelector } from 'react-redux'
import { Item } from '../../components/CollectionItem/CollectionItem'
import { selectCartItems, selectCartTotal } from '../../redux/Cart/cartSelector'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'
import StripeButton from 'src/components/stripeButton'

interface Props {}

interface Result {
  cartItems: Item[]
  total: number
}
const structuredSelector = createStructuredSelector<RootState, Result>({
  cartItems: selectCartItems,
  total: selectCartTotal,
})

const CheckoutPage = (props: Props) => {
  const { cartItems, total } = useSelector<RootState, Result>((state) =>
    structuredSelector(state),
  )

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="checkout-block">
          <span>Product</span>
        </div>
        <div className="checkout-block">
          <span>Description</span>
        </div>
        <div className="checkout-block">
          <span>Quantity</span>
        </div>
        <div className="checkout-block">
          <span>Price</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <StripeButton price={total} />
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
    </div>
  )
}

export default CheckoutPage
