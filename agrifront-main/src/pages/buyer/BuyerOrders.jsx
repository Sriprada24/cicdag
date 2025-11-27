import React, { useEffect, useState } from 'react';
import './BuyerOrders.css';

const BuyerOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('buyerOrders')) || [];
    setOrders(stored.reverse()); // Show latest orders first
  }, []);

  return (
    <div className="buyer-orders">
      <h2>📄 My Orders</h2>

      {orders.length === 0 ? (
        <p>You haven't placed any orders yet.</p>
      ) : (
        orders.map((order, index) => (
          <div className="order-card" key={index}>
            <div className="order-header">
              <strong>Order ID:</strong> #{order.id}
              <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span>
            </div>
            <div className="order-details">
              <p><strong>Date:</strong> {order.date}</p>
              <ul>
                {order.items.map((item, i) => (
                  <li key={i}>
                    {item.name} – {item.quantity} {item.unit} × ₹{item.price} = ₹{item.price * item.quantity}
                  </li>
                ))}
              </ul>
              <p className="total">Total: ₹{order.total.toFixed(2)}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BuyerOrders;
