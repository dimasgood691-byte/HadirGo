import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './LandingPage.css';
import BackgroundImage from "../assets/foto-bg.jpg";
import BackgroundDevelop from "../assets/bg-develop.jpg"
import LogoHadirGo from "../assets/logoHadirGo.jpg";
import LogoRPL from "../assets/logo-rpl.jpg";
import gmailIcon from "../assets/gmail-icon.png";
import waIcon from "../assets/whatsapp-icon.png";
import LogoDicoding from "../assets/dicoding-logo.png";
import FotoDimas from "../assets/foto-dimas.jpg";
import FotoAzzam from "../assets/foto-azzam.jpg";
import iconJadul from '../assets/jadul.jpg';
import iconPraktis from '../assets/praktis.jpg';
import iconWaktu from '../assets/waktu.jpg';
import iconMudah from '../assets/mempermudah.jpg';

function LandingPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const heroImageRef = useRef(null);

    // Efek Parallax Ringan pada Gambar saat Mouse Bergerak
    const handleMouseMove = (e) => {
        if (!heroImageRef.current) return;
        const { clientX, clientY } = e;
        const moveX = (clientX - window.innerWidth / 2) / 50;
        const moveY = (clientY - window.innerHeight / 2) / 50;
        heroImageRef.current.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX * 0.5}deg)`;
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.2 // Animasi jalan saat 20% footer terlihat
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Menambahkan class 'appear' ke semua kolom
                    const columns = entry.target.querySelectorAll('.footer-col');
                    columns.forEach((col) => col.classList.add('appear'));
                }
            });
        }, observerOptions);

        const footerElement = document.querySelector('.footer-main');
        if (footerElement) observer.observe(footerElement);

        return () => {
            if (footerElement) observer.unobserve(footerElement);
        };
    }, []);

    const development = [
        {
            name: 'Dimas Putra Madiadipura',
            role: 'Frontend and Backend',
            image: FotoDimas

        },
        {
            name: 'Muhammad Azam Wahyudin',
            role: 'Frontend and backend',
            image: FotoAzzam
        }
    ];

    const featureData = [
        { id: 1, img: iconJadul, title: 'Sistem Jadul', desc: 'Kami sadar bahwa pada setiap sekolah masih menggunakan sistem absensi jadul', path: '/sistem-jadul' },
        { id: 2, img: iconPraktis, title: 'Praktis', desc: 'UI dan sistem yang mudah digunakan untuk guru dan siswa/siswi', path: '/praktis' },
        { id: 3, img: iconWaktu, title: 'Hemat Waktu', desc: 'Agar bapa dan ibu guru yang piket lorong tidak perlu lagi nyamperin ke satiap kelas untuk mengambil kertas absen', path: '/hemat-waktu' },
        { id: 4, img: iconMudah, title: 'Mempermudah', desc: 'Mempermudah pekerjaan sekretaris kelas. Agar mereka tidak lagi mencatat dengan kertas', path: '/mempermudah' },
    ];

    const onClick = () => {
        navigate("/register")
    }

    return (
        <div className="wrapper" onMouseMove={handleMouseMove}>
            {/* halaman utama start */}
            <section>
                <div className="container-utama"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${BackgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>

                    <div className="content-wrapper">
                        {/* header start */}
                        <header className={`header-main ${isScrolled ? "scrolled" : ""}`}>
                            <div className="logo-container">
                                <img src={LogoHadirGo} alt="Logo HadirGo" className="top-logo" />
                            </div>
                            <div className="nav-info">
                                <span className="text-linklabahead">www.HadirGo!.com</span>
                                {/* Opsional: Tambahkan garis bawah dekoratif */}
                                <div className="header-line"></div>
                            </div>
                        </header>
                        {/* header end */}

                        {/* hero start */}
                        <main className="hero">
                            {/* Teks kiri */}
                            <div className="hero-text fade-in-up">
                                <div className="highlight-box">
                                    <b><h1>Hadir <span className="text-pop">Go!</span></h1></b>
                                </div>
                                <p className="description">Gak Perlu Absen manual Lagi!!!
                                    Semua Data Kehadiran Bisa Tersimpan Otomatis Dan Aman Di HadirGo!</p>

                                <button
                                    className="button-daftar interactive-btn"
                                    onClick={() => navigate("/register")}
                                    disabled={isLoading}
                                >
                                    <span className="btn-content">
                                        {isLoading ? "Loading..." : "Daftar Gratis"}
                                        <i className="arrow-icon"><b>→</b></i>
                                    </span>
                                </button>
                            </div>

                            {/* Gambar kanan — dibungkus wrapper agar tidak nabrak teks */}
                            <div className="hero-image-wrapper">
                                <div className="hero-img floating-anim" ref={heroImageRef}>
                                    <img src={LogoRPL} alt="logo-rpl" className="manekin" />
                                </div>
                            </div>
                        </main>
                        {/* hero end */}
                    </div>
                </div>
            </section>
            {/* halaman pertama end */}

            {/* pembatas halaman start */}
            <div
                className="page-divider"
                style={{
                    width: '100%',
                    height: '40px', // Sesuaikan ketebalan biru di gambar
                    backgroundColor: '#0A3865', // Warna biru tua HadirGo!
                    margin: '0',
                    padding: '0'
                }}
            />
            {/* pembatas halaman end */}

            {/* halaman development */}
            <section>
                <h2>TEAM DEVELOPER</h2>
                <div className="container-ketiga">
                    {development.map((member, index) => (
                        <div
                            key={index}
                            className="team-card"
                            style={{ animationDelay: `${index * 0.2}s` }} // Kartu muncul berurutan (0.2s, 0.4s, dst)
                        >
                            <div className="card-header">
                                <h3 className="member-name">{member.name}</h3>
                                <p className="member-role">{member.role}</p>
                            </div>
                            <div className="image-wrapper">
                                <img src={member.image} alt={member.name} className="member-image" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bantuan">
                    <button className="btn-bantuan">Bantuan!</button>
                </div>
            </section>
            {/* halaman development end */}

            {/* halaman footer */}
            <footer
                className="footer-main"
            >
                <div className="footer-container">
                    {/* Kolom 1: Logo + Sponsor */}
                    <div className="footer-col">
                        <img
                            src={LogoHadirGo}
                            alt="logo HadirGo"
                            className="footer-logo-main"
                        />
                        <div className="support-section">
                            <p>Support by:</p>
                            <div className="support-box">
                                <img src={LogoRPL} alt="logo rpl" className="support-img" />
                                <div className="footer-divider"></div>
                                <img src={LogoDicoding} alt="Dicoding" className="support-img" />
                            </div>
                        </div>
                    </div>

                    {/* Kolom 2: Navigasi */}
                    <div className="footer-col nav-col">
                        <ul className="footer-links">
                            <li>Tentang Kami</li>
                            <li>Komunitas</li>
                            <li>Fitur Kami</li>
                            <li>Tim Developer</li>
                        </ul>
                    </div>

                    {/* Kolom 3: Kontak */}
                    <div className="footer-col">
                        <h3 className="footer-heading">KONTAK KAMI :</h3>
                        <div className="contact-info">
                            <div className="contact-item">
                                <img src={gmailIcon} alt="Gmail" className="contact-icon" />
                                <span>HadirGo!@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <img src={waIcon} alt="WhatsApp" className="contact-icon" />
                                <span>+62 821-1261-3649</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Copyright 2026 – 2030 HadirGo!.com</p>
                </div>
            </footer>
            {/* halaman footer end */}
        </div >
    );
}

export default LandingPage;