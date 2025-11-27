import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './BuyerCart.css';

const BuyerCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(stored);
  }, []);

  const handleRemove = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const navigate = useNavigate();

const handleProceedToPayment = () => {
  if (cart.length === 0) {
    alert('Your cart is empty.');
    return;
  }

  // Store the cart temporarily for payment step
  localStorage.setItem('cart', JSON.stringify(cart));
  navigate('/buyer/payments');
};

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="buyer-cart">
      <h2>🛒 Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Unit</th>
                <th>Price</th>
                <th>Subtotal</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.unit}</td>
                  <td>₹{item.price}</td>
                  <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => handleRemove(index)}>❌</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-footer">
  <h3>Total: ₹{total.toFixed(2)}</h3>
  <button className="place-order-btn" onClick={handleProceedToPayment}>
    💳 Proceed to Payment
  </button>
</div>
        </>
      )}
    </div>
  );
};

export default BuyerCart;
