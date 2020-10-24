import React, { InputHTMLAttributes } from 'react'
import './form-input.styles.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

export const FormInput: React.FC<Props> = ({
  onChange,
  label,
  ...otherProps
}) => {
  return (
    <div className="group">
      <input className="form-input" onChange={onChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  )
}
