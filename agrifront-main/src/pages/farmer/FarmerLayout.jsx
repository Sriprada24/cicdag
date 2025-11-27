import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './FarmerLayout.css';

const FarmerLayout = () => {
  return (
    <div className="farmer-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <h2>👨‍🌾 Farmer Dashboard</h2>
        <div>👤 Farmer</div>
      </div>

      {/* Sidebar + Main Content */}
      <div className="dashboard-body">
        <div className="sidebar">
          <h3>🌾 AgriConnect</h3>
          <ul>
            <li><NavLink to="/farmer/dashboard">📊 Dashboard</NavLink></li>
            <li><NavLink to="/farmer/my-crops">🌽 My Crops</NavLink></li>
            <li><NavLink to="/farmer/orders">📦 Orders</NavLink></li>
            <li><NavLink to="/farmer/market-info">🧾 Market Info</NavLink></li>
            <li><NavLink to="/logout">🚪 Logout</NavLink></li>
          </ul>
        </div>

        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default FarmerLayout;
