import React from 'react';
import './Orders.css';

const orders = [
  {
    id: '#ORD-7289',
    buyer: 'Michael Davis',
    products: 'Organic Tomatoes (5kg), Lettuce (2kg)',
    total: '$42.50',
    status: 'Pending',
    action: 'Accept',
  },
  {
    id: '#ORD-7284',
    buyer: 'Jessica Wong',
    products: 'Sweet Corn (10kg), Bell Peppers (3kg)',
    total: '$76.00',
    status: 'Confirmed',
    action: 'View',
  },
  {
    id: '#ORD-7281',
    buyer: 'Robert Johnson',
    products: 'Organic Apples (8kg)',
    total: '$32.00',
    status: 'Shipped',
    action: 'View',
  },
];

const Orders = () => {
  return (
    <div className="orders-container">
      <h2>Recent Orders</h2>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Buyer</th>
            <th>Products</th>
            <th>Total</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr key={i}>
              <td>{order.id}</td>
              <td>{order.buyer}</td>
              <td>{order.products}</td>
              <td>{order.total}</td>
              <td>
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
              <td>
                <button className="action-btn">
                  {order.action}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
