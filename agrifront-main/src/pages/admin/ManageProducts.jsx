import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import './AdminDashboard.css';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/products').then(res => setProducts(res.data));
  }, []);

  return (
    <div className="admin-section">
      <h2>🌾 All Products</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Farmer</th><th>Price</th><th>Qty</th><th>Unit</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={i}>
              <td>{p.name}</td>
              <td>{p.farmerName || p.farmerEmail}</td>
              <td>₹{p.price}</td>
              <td>{p.quantity}</td>
              <td>{p.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
