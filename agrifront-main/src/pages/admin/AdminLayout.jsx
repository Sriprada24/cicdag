// src/pages/admin/AdminLayout.jsx
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './AdminLayout.css';

const AdminLayout = () => {
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <h2>🛠️ Admin Panel</h2>
        <ul>
          <li><NavLink to="/admin/dashboard">📊 Dashboard</NavLink></li>
          <li><NavLink to="/admin/users">👥 Manage Users</NavLink></li>
          <li><NavLink to="/admin/products">🌾 Manage Products</NavLink></li>
          <li><NavLink to="/admin/orders">📦 Manage Orders</NavLink></li>
        </ul>
      </div>
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
