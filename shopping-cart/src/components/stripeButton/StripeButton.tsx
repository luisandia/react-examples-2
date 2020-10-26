import React from 'react'
import StripeCheckout, { Token } from 'react-stripe-checkout'
import axios from 'axios'

interface Props {
  price: number
}

const StripeButton: React.FC<Props> = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51HgMUGBzTjx1wner8bp61yTuGxNN3t0B90mzU4hasfeRLOopz9NZiEdjxIkIOOMfV5wgsU89YIa8GsPgVA1QZ9SM00sxVS0FLj'

  const onToken = (token: Token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert('succesful payment ')
      })
      .catch((error) => {
        console.error('Payment Error: ', error)
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.',
        )
      })
  }
  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://www.flaticon.es/svg/static/icons/svg/3587/3587802.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeButton
