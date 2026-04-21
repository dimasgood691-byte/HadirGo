import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute() {
    return (
        <div className="container">
            <h1>Hello ProtectedRoute telah berjalan di Web HadirGo!</h1>
        </div>
    );
}

export default ProtectedRoute;