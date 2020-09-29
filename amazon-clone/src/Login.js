import { auth } from "./firebase";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
          className="login__logo"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="email"
          />
          <h5>Password</h5>
          <input
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signinbutton">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy.
          please see our Privacy Notice,our Cookies Notice and our Product-based
          Notice.
        </p>
        <p>-----------New To Amazon------------</p>
        <button onClick={register} className="login__registerbutton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
