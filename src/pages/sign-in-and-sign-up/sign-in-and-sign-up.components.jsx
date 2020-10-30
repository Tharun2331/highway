import React from "react";
import "./sign-in-and-sign-up.styles.scss";
import SignIn from  "../../components/signin/signin.components";
import SignUp from "../../components/sign-up/sign-up.components";


const SignINAndSignUp = () =>(
  <div className="sign-in-and-sign-up">
  <SignIn />
  <SignUp />
  </div>
);

export default SignINAndSignUp;
