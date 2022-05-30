import React, { useState } from 'react'
import FormInput from '../FormInput'
import CustomButton from '../CustomButtom'
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

interface Props {}

const signInWithGoogle = async () => {
  await signInWithGooglePopup();
};


export const SignIn = (props: Props) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { email, password } = state
    try {
      await signInAuthUserWithEmailAndPassword(email, password)
    } catch (error) {
      console.error(error)
    }
    setState({ ...state, email: '', password: '' })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target

    setState({ ...state, [name]: value })
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          onChange={handleChange}
          value={state.email}
          label="email"
          required
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
        />
        <FormInput
          name="password"
          type="password"
          value={state.password}
          onChange={handleChange}
          label="password"
          required
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign with google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}
