import React from 'react'

import SignIn from '../../components/SignIn'

import './sign-in-and-sign-up.styles.scss'
import SignUp from '../../components/SignUp'

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
)

export default SignInAndSignUpPage
