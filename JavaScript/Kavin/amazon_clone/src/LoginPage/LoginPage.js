import React, { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  console.log(Email, Password);
  return (
    <div className="loginPage__container">
      <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
      <div className="loginPage__Details">
        <h1>Sign-up</h1>
        <form>
          <span>E-mail</span>
          <input type="text" onChange={(e) => setEmail(e.target.value)}></input>

          <span>Password</span>
          <input
            type="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            type="submit"
            
            className="login__signInButton"
          >
            Sign in
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button  className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
