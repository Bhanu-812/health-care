import React, { useState } from "react";
import axios from 'axios';
import "./Signup.css";

function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("patient"); // default role to patient

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', {
                firstName,
                lastName,
                email,
                password,
                role
            });
            alert('User registered successfully');
        } catch (error) {
            console.error('Error registering user:', error.response?.data || error.message);
            alert(`Error registering user: ${error.response?.data?.message || error.message}`);
        }
    };

    return (
        <div className="signup-container">
            <h1>Create an account</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    placeholder="First Name*"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    placeholder="Last Name*"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Enter Mail*"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    placeholder="Enter Password*"
                    onChange={(e) => setPassword(e.target.value)}
                    minLength="8"
                    required
                />
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    placeholder="Re-Enter Password*"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    minLength="8"
                    required
                />
                <label htmlFor="role">Role:</label>
                <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                </select>
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
}

export default Signup;
