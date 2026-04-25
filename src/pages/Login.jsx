import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      {/* Ornamen Lingkaran Background */}
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>

      <div className="login-card">
        <h1 className="login-title">Login</h1>
        <p className="login-subtitle">web kelas, jangan di hack ajg</p>

        <form className="login-form">
          <div className="input-group">
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" />
          </div>

          <button type="submit" className="btn-signin">
            Log In
          </button>
        </form>

        <div className="separator">
          <span>or</span>
        </div>

        <button className="btn-other">Sign in with other</button>
      </div>
    </div>
  );
}

export default Login;