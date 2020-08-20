import * as React from 'react'
import './sign-up.styles.scss'
import FormInput from '../FormInput'
import CustomButtom from '../CustomButtom'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

interface Props {}

export interface RegisterUser {
  displayName: string
  email: string
  password: string
  confirmPassword: string
}

const SignUp: React.FC<Props> = () => {
  const [state, setState] = React.useState<RegisterUser>({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const clearForm = () => {
    setState({
      ...state,
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    password !== confirmPassword && alert("password don't match")
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      )
      await createUserProfileDocument(user, { displayName })
      clearForm()
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target

    setState({ ...state, [name]: value })
  }

  const { displayName, email, password, confirmPassword } = state
  return (
    <div className="sign-up">
      <h2 className="title">I do not have account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButtom type="submit">SIGN UP</CustomButtom>
      </form>
    </div>
  )
}
export default SignUp
