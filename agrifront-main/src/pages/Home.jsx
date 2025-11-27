import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../css/Home.css';

export default function Home() {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header className="home-header">
        <h1>🌾 Welcome to Agri-Connect</h1>
        <p>Your trusted platform to buy and sell farm produce directly.</p>
        <div className="home-banner">
  <h1>Connect Directly with Local Farmers</h1>
  <p>Cut out the middlemen. Get fresher produce at fairer prices while supporting local agriculture.</p>
</div>


        <div className="home-buttons">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/register" className="btn-outline">SignUp</Link>
        </div>
      </header>

      <section className="home-images">
        <img src="/images/farmer.jpg" alt="Farmer in field" />
        <img src="/images/farmproduce.jpg" alt="Fresh produce" />
        <img src="/images/market.jpg" alt="Local market" />
      </section>

      <footer className="home-footer">
        <p>Helping farmers grow with technology — Agri-iConnect © 2025</p>
      </footer>
    </motion.div>
  );
}
