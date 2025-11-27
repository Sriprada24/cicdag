import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import '../css/Login.css';

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8081/api/users/login', form)
      .then(res => {
        if (typeof res.data === 'string') {
          setMessage(res.data);
        } else {
          localStorage.setItem('user', JSON.stringify(res.data));
          localStorage.setItem('role', res.data.role);
          window.location.href = `/${res.data.role}-dashboard`;
        }
      })
      .catch(() => setMessage('Login failed. Please try again.'));
  };

  return (
    <motion.div className="login-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="login-box">
        <h2>Welcome 👨‍🌾</h2>
        <p>Please login to continue</p>

        {message && <div className="message-box">{message}</div>}

        <form className="login-form" onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <div className="forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>

          <div className="login-register-link">
            <p>
              Don’t have an account? <a href="/register">Sign up here</a>
            </p>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
