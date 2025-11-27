import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import './AdminDashboard.css';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/users').then(res => setUsers(res.data));
  }, []);

  const handleDelete = (email) => {
    axios.delete(`/users/${email}`)
      .then(() => setUsers(users.filter(u => u.email !== email)))
      .catch(err => console.error("Delete failed", err));
  };

  return (
    <div className="admin-section">
      <h2>👥 All Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Role</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td><button onClick={() => handleDelete(u.email)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
