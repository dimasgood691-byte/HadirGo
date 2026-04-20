import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

import QRScanner from './components/QRScanner'; //komponen kamera untuk siswa

import Sidebar from './components/Sidebar'; //komponen/ si sidebar itu sendiri

import StatCard from './components/StatCard'; //komponen untuk di dashboard

import Dashboard from './pages/Dashboard'; //ringkasan data guru

import GenerateQR from './pages/GenerateQR'; //halaman buat menampilkan code QR untuk absensi

import Login from './pages/Login'; //halaman masuk

import ManageSiswa from './pages/ManageSiswa'; //CRUD siswa (guru)

import ScanAbsen from './pages/ScanAbsen'; //halaman camera siswa

function App() {
    return (
        <Router>
            <Routes>
                {/* Halaman Publik */}
                <Route path="/login" element={<Login />} />

                {/* Halaman Terproteksi (Bungkus di sini) */}
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/generateqr" element= {<ProtectedRoute><GenerateQR /></ProtectedRoute>} />
                <Route path="/scanabsen" element= {<ProtectedRoute><ScanAbsen /></ProtectedRoute>} />
            </Routes>
        </Router>
    );
}

export default App;