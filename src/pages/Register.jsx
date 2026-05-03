import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logosamping from "../assets/logo-rpl.jpg";
import logoatasregist from "../assets/logoHadirGo.jpg";
import "./register.css";
import LandingPage from "./LandingPage";
import { supabase } from "../lib/supabaseClient";

function Register() {
    const navigate = useNavigate();

    // 1. Pindahkan State ke level utama fungsi Register
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const onClick = () => {
        navigate("/LandingPage");
    };

    // 2. Buat fungsi handleRegister langsung di sini (bukan di dalam fungsi lain)
    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Password tidak cocok!");
            return;
        }

        try {
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        full_name: fullName,
                    },
                },
            });

            if (error) throw error;
            alert("Registrasi Berhasil! Akun kamu sudah aktif.");
            navigate("/login");

        } catch (error) {
            alert("Terjadi kesalahan: " + error.message);
        }
    };

    const [showPassword, setShowPassword] = useState(false);

    // 3. Render HTML langsung di sini
    return (
        <div className="register-page">
            <div className="form-section">
                <div className="form-container">
                    <h1 className="title">Registrasi Siswa</h1>
                    <p className="subtitle">
                        Buat akun untuk menggunakan platform HadirGo
                    </p>
                    <form className="register-form" onSubmit={handleRegister}>
                        <input
                            type="text"
                            placeholder="Nama Lengkap (Huruf Kapital)"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <div className="password-wrapper">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="password-wrapper">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Konfirmasi Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            className="tab-password"
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Sembunyikan" : "Lihat Password"}
                        </button>

                        <button type="submit" className="btn-submit">
                            Buat Akun
                        </button>
                    </form>
                </div>
            </div>

            <div className="image-section">
                <div className="image-wrapper">
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