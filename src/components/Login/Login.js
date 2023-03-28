import React, { useState } from 'react';
import {MdLogin} from 'react-icons/md'
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // Here, you can call an API to authenticate the user
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
          placeholder='Enter mail*'
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
        <button type="submit" className="submit-btn">Login <MdLogin /></button>
      </form>
    </div>
  );
};

export default Login;
