import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import '../css/Register.css';

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    role: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8081/api/users/register', form)
      .then(res => {
        setMessage(res.data);
        if (res.data === 'User registered successfully') {
          setTimeout(() => {
            window.location.href = '/login';
          }, 1500);
        }
      })
      .catch(() => setMessage('Registration failed. Please try again.'));
  };

  return (
    <motion.div
      className="register-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="register-box">
        <h2>Create Your Account 🌱</h2>
        <p>Join Agri-Connect to buy or sell farm produce</p>

        {message && <div className="message-box">{message}</div>}

        <form className="register-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <label>Role</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            required
          >
            <option value="">- Select -</option>
            <option value="farmer">Farmer</option>
            <option value="buyer">Buyer</option>
            <option value="admin">Admin</option>
          </select>

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Choose a password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Register</button>

          <div className="register-login-link">
            <p>Already have an account? <a href="/login">Login here</a></p>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
