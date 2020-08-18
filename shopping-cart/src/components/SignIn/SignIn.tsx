import React, { useState } from "react";
import FormInput from "../FormInput";
import CustomButton from "../CustomButtom";
import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

interface Props {}

export const SignIn = (props: Props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setState({ ...state, email: "", password: "" });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setState({ ...state, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={state.email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={state.password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
