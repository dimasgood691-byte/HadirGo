import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logosamping from "../assets/logo-rpl.jpg";
import logoatasregist from "../assets/logoHadirGo.jpg";
import "./register.css";
import LandingPage from "./LandingPage";

function Register() {
    // --- TAMBAHKAN BARIS INI (Wajib agar navigate berfungsi) ---
    const navigate = useNavigate();

    const onClick = () => {
        navigate("/LandingPage");
    };

    return (
        <div className="register-page">
            {/* BAGIAN KIRI */}
            <div className="form-section">
                <div className="form-container">
                    <h1 className="title">Registrasi</h1>
                    <p className="subtitle">
                        Buat akun untuk menggunakan platform HadirGo
                    </p>

                    <form className="register-form">
                        <input type="text" placeholder="Nama Lengkap" />
                        <input type="email" placeholder="Email" />
                        <div className="password-wrapper">
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="password-wrapper">
                            <input type="password" placeholder="Konfirmasi Password" />
                        </div>

                        <div className="checkbox-group">
                            <input type="checkbox" id="policy" />
                            <label htmlFor="policy">
                                Saya sudah memahami penjelasan terkait{" "}
                                <a href="#">kebijakan privasi</a>
                            </label>
                        </div>

                        <button type="submit" className="btn-submit">
                            Buat Akun
                        </button>
                    </form>

                    <p className="login-link">
                        Kamu sudah memiliki akun? <a href="/login">Masuk</a>
                    </p>
                </div>
            </div>

            {/* BAGIAN KANAN */}
            <div className="image-section">
                <div className="image-wrapper">
                    {/* --- PASANG onClick DI SINI --- */}
                    <img
                        className="side-logo"
                        src={logoatasregist}
                        alt="Logo HadirGo"
                        onClick={onClick}
                        style={{ cursor: "pointer" }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Register;
