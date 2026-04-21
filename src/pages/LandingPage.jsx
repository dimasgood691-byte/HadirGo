import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './LandingPage.css';

function LandingPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const onClick = () => {
        navigate("/Login")
    }

    return (
        <div className="container-utama">
            <div>
                <h1>Hello Ini Website HadirGo!</h1>
                <p>Semoga Dapat Membantu Anda Dalam Absensi</p>

                <button
                    className="button-daftar"
                    onClick={() => navigate("/Login")}
                    disabled={isLoading}
                >
                    {isLoading ? "Loading..." : "Login Gratis"} <span>→</span>
                </button>
            </div>
        </div>
    );
}

export default LandingPage;