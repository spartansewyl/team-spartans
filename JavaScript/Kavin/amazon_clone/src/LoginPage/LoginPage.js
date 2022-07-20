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
        <h1>Sign up</h1>
        <span>Email</span>
        <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
        <span>Password</span>
        <input
          type="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button>Sign in</button>
        <p>loremlkkjfdhvauigsdviaobclhadbvohbadhl</p>
        <button></button>
      </div>
    </div>
  );
}

export default LoginPage;
