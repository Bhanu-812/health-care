import React, { useState } from 'react';
import { MdLogin } from 'react-icons/md';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setRole, setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRoleLocal] = useState('patient'); // default role to patient
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/login', { email, password, role });
      localStorage.setItem('authToken', data.token);
      setRole(role);
      setIsAuthenticated(true);
      console.log(`Logged in as ${role}`);
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error.response?.data || error.message);
      alert(`Error logging in: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="login-form">
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          placeholder='Enter email*'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          placeholder='Enter Password*'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="role">Role</label>
        <select id="role" value={role} onChange={(e) => setRoleLocal(e.target.value)}>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
        </select>
        <button type="submit" className="submit-btn">Login <MdLogin /></button>
      </form>
    </div>
  );
};

export default Login;
