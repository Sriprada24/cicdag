import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import './BuyerLayout.css';

const BuyerLayout = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    localStorage.removeItem('cart');
    navigate('/');
  };

  return (
    <div className="buyer-dashboard">

      {/* HEADER */}
      <div className="buyer-header">
        <div className="buyer-profile">👤 {user?.name || 'Buyer'}</div>
        <div className="buyer-cart">
          <NavLink to="/buyer/cart">🛒 Cart</NavLink>
        </div>
        <div className="buyer-logout">
          <button onClick={handleLogout}>🚪 Logout</button>
        </div>
      </div>

      <div className="buyer-body">
        {/* SIDEBAR MENU */}
        <div className="buyer-sidebar">
          <h3>🛍️ Menu</h3>
          <ul>
            <li><NavLink to="/buyer/products">📦 Products</NavLink></li>
            <li><NavLink to="/buyer/cart">🛒 Cart</NavLink></li>
            <li><NavLink to="/buyer/payments">💳 Payment</NavLink></li>
            <li><NavLink to="/buyer/orders">📄 My Orders</NavLink></li>
          </ul>
        </div>

        {/* CONTENT OUTLET */}
        <div className="buyer-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BuyerLayout;
