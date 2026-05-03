import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import GenerateQR from './pages/GenerateQR';
import Login from './pages/Login';
import Register from './pages/Register';
import ManageSiswa from './pages/ManageSiswa';
import ScanAbsen from './pages/ScanAbsen';
import LandingPage from './pages/LandingPage';

// Note: Sidebar dan StatCard biasanya dipanggil di dalam komponen Page 
// atau di dalam sebuah Layout component.

function App() {

    return (
        <Router>
            <Routes>
                {/* Halaman Publik */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Halaman Terproteksi */}
                <Route path="/dashboard" element={
                    <ProtectedRoute> <Dashboard /> </ProtectedRoute>
                } />
                <Route path="/generate-qr" element={ // Menggunakan kebab-case lebih standar untuk URL
                    <ProtectedRoute> <GenerateQR /> </ProtectedRoute>
                } />
                <Route path="/manage-siswa" element={
                    <ProtectedRoute> <ManageSiswa /> </ProtectedRoute>
                } />
                <Route path="/scan-absen" element={
                    <ProtectedRoute> <ScanAbsen /> </ProtectedRoute>
                } />

                {/* Redirect jika route tidak ditemukan */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;