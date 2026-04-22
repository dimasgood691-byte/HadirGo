import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './LandingPage.css';
import BackgroundImage from "../assets/foto-bg.jpg";
import LogoHadirGo from "../assets/logoHadirGo.jpg";
import LogoRPL from "../assets/logo-rpl.jpg";

function LandingPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const onClick = () => {
        navigate("/Login")
    }

    return (
        <div className="container-utama"
            style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${BackgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                width: '100%'
            }}>
            <div>

                {/* header */}
                <header>
                    <img
                        src={LogoHadirGo}
                        alt="Logo HadirGo"
                        className="top-logo"
                    />
                    <span className="text-linklabahead">www.HadirGo!.com</span>
                </header>
                {/* header end */}

                {/* hero start */}
                <main className="hero">
                    {/* Teks kiri */}
                    <div className="hero-text">
                        <div className="highlight-box">
                            <b><h1>Hadir <span>Go!</span></h1></b>
                        </div>
                        <p>Gak perlu ribet absen manual lagi!
                            Semua data kehadiran tersimpan otomatis dan aman.</p>

                        <button
                            className="button-daftar"
                            onClick={() => navigate("/register")}
                            disabled={isLoading}
                        >
                            {isLoading ? "Loading..." : "Daftar Gratis"} <span>→</span>
                        </button>
                    </div>

                    {/* Gambar kanan — dibungkus wrapper agar tidak nabrak teks */}
                    <div className="hero-image-wrapper">
                        <div className="hero-img">
                            <img src={LogoRPL} alt="logo-rpl" className="manekin" />
                        </div>
                    </div>
                </main>
                {/* hero end */}
                {/* pembatas halaman start */}
                <div
                    style={{
                        width: '100%',
                        height: '40px', // Sesuaikan ketebalan biru di gambar
                        backgroundColor: '#0A3865', // Warna biru tua HadirGo!
                        margin: '0',
                        padding: '0'
                    }}
                />
                {/* pembatas halaman end */}
            </div>
        </div>
    );
}

export default LandingPage;