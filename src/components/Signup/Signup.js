import React, { useState } from "react";
import "./Signup.css";

function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Submit form data to API or backend service
        console.log({ firstName, lastName, email, password, confirmPassword });
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
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
}

export default Signup;
