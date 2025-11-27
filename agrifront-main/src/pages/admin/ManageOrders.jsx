import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import './AdminDashboard.css';

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/orders').then(res => setOrders(res.data));
  }, []);

  return (
    <div className="admin-section">
      <h2>📦 All Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th><th>Buyer</th><th>Product</th><th>Qty</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o, i) => (
            <tr key={i}>
              <td>{o.id}</td>
              <td>{o.buyerEmail}</td>
              <td>{o.productName}</td>
              <td>{o.quantity} {o.unit}</td>
              <td>{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrders;
