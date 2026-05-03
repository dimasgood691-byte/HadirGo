import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/register")
  }

  return (
    <div className="login-page">
      {/* Ornamen Lingkaran Background */}
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>

      <div className="login-card">
        <h1 className="login-title">Login Siswa</h1>
        <p className="login-subtitle">web kelas, jangan di hack ajg</p>

        <form className="login-form">
          <div className="input-group">
            <input type="text" placeholder="Nama Lengkap" />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email" />
          </div>

          <div className="input-group">
            <input type="password" placeholder="Password" />
          </div>

          <button type="submit" className="btn-signin">
            Login
          </button>
        </form>

        <div className="separator">
          <span>or</span>
        </div>

        <button
        className="btn-other"
        onClick={onClick}
        >Buat Akun</button> 
      </div>
    </div>
  );
} 

export default Login;