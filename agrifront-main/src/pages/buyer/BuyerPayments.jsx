import React, { useEffect, useState } from 'react';
import './BuyerPayments.css';
import { useNavigate } from 'react-router-dom';

const BuyerPayments = () => {
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(stored);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (cart.length === 0) return alert('No items in cart.');

    const orders = JSON.parse(localStorage.getItem('buyerOrders')) || [];

    const newOrder = {
      id: Date.now(),
      items: cart,
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
      date: new Date().toLocaleString(),
      status: 'Paid'
    };

    orders.push(newOrder);
    localStorage.setItem('buyerOrders', JSON.stringify(orders));
    localStorage.removeItem('cart');

    alert('✅ Payment Successful!');
    navigate('/buyer/orders');
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="buyer-payments">
      <h2>💳 Checkout</h2>

      <div className="payment-summary">
        <h3>Order Summary</h3>
        {cart.length === 0 ? <p>No items in cart.</p> : (
          <ul>
            {cart.map((item, idx) => (
              <li key={idx}>
                {item.name} — {item.quantity} {item.unit} × ₹{item.price} = ₹{item.price * item.quantity}
              </li>
            ))}
          </ul>
        )}
        <p className="total">Total: ₹{total.toFixed(2)}</p>
      </div>

      <form className="payment-form" onSubmit={handlePayment}>
        <h3>Payment Details</h3>
        <input
          type="text"
          name="name"
          placeholder="Name on Card"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={form.cardNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          value={form.expiry}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={form.cvv}
          onChange={handleChange}
          required
        />

        <button type="submit">✅ Pay Now</button>
      </form>
    </div>
  );
};

export default BuyerPayments;
