import React from 'react'

import SignIn from '../../components/SignIn'

import './sign-in-and-sign-up.styles.scss'
import SignUp from '../../components/SignUp'
import { useNavigate } from 'react-router-dom'
import { CurrentUser } from 'src/redux/User/userSlice'

interface Props {
  user?: CurrentUser
}
const SignInAndSignUpPage = (props: Props) => {
  const { user } = props
  let navigate = useNavigate()

  if (user?.currentUser) {
    navigate('/')
  }

  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInAndSignUpPage
