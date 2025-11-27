import React, { useEffect, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
} from 'recharts';
import axios from '../../axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    farmers: 0,
    buyers: 0,
    products: 0,
    orders: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const users = (await axios.get('/users')).data;
      const products = (await axios.get('/products')).data;
      const orders = (await axios.get('/orders')).data;

      setStats({
        farmers: users.filter(u => u.role === 'farmer').length,
        buyers: users.filter(u => u.role === 'buyer').length,
        products: products.length,
        orders: orders.length,
      });
    };

    fetchStats();
  }, []);

  return (
    <div className="admin-stats">
      
      <div className="card">👨‍🌾 Farmers: {stats.farmers}</div>
      <div className="card">🧑‍💼 Buyers: {stats.buyers}</div>
      <div className="card">🌾 Products: {stats.products}</div>
      <div className="card">📦 Orders: {stats.orders}</div>
      <h3 style={{ marginTop: '30px' }}>📈 Orders vs Products</h3>
<ResponsiveContainer width="100%" height={300}>
  <BarChart data={[
    { name: 'Products', value: stats.products },
    { name: 'Orders', value: stats.orders }
  ]}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis allowDecimals={false} />
    <Tooltip />
    <Bar dataKey="value" fill="#2e7d32" />
  </BarChart>
</ResponsiveContainer>
    </div>
  );
};

export default AdminDashboard;
