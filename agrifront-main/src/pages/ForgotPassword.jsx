import React, { useState } from 'react';
import axios from 'axios';
import '../css/ForgotPassword.css'

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/api/users/forgot-password', null, {
      params: { email }
    })
    .then(res => setMessage(res.data))
    .catch(err => setMessage('Error sending email'));
  };

  return (
    <div className="forgot-password-page">
  <div className="forgot-password-wrapper">
    <h2>Reset Your Password</h2>
    <p>Enter your registered email address and we’ll send your password.</p>

    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Send Password</button>
    </form>

    {message && <p className="message">{message}</p>}
  </div>
</div>






  );
}
