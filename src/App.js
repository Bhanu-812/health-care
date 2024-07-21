import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/RootLayout";
import Contactus from "./components/Contactus/Contactus";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dashboard from './components/dashBoard/Dashboard';
import Appointments from "./components/Appointments/Appointments";

const App = () => {
    const [role, setRole] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
        setRole('');
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<RootLayout isAuthenticated={isAuthenticated} handleLogout={handleLogout} />}>
                    <Route index element={<Home />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="appointments" element={<Appointments />} />
                    <Route path="signup" element={isAuthenticated ? <Home /> : <Signup />} />
                    <Route path="login" element={isAuthenticated ? <Home /> : <Login setRole={setRole} setIsAuthenticated={setIsAuthenticated} />} />
                    <Route path="contact-us" element={<Contactus />} />
                </Route>
            </Routes>
            {role && <p>Welcome, {role}!</p>}
        </Router>
    );
};
export default App;
