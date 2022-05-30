import React from 'react'
import './custom-buttom.styles.scss'

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode
  isGoogleSignIn?: boolean
  isInverted?: boolean
}

export const CustomButtom: React.FC<Props> = ({
  children,
  isGoogleSignIn,
  isInverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${isInverted ? 'inverted' : ''}  ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  )
}
