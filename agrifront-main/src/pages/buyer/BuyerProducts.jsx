import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BuyerProducts.css';

const BuyerProducts = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
      .then(res => setProducts(res.data.reverse()))
      .catch(err => console.error("Failed to fetch products:", err));
  }, []);

  const handleQuantityChange = (index, value) => {
    setQuantities(prev => ({
      ...prev,
      [index]: parseInt(value)
    }));
  };

  const handleAddToCart = (product, index) => {
    const quantity = quantities[index] || 1;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existing = cart.find(item => item.name === product.name && item.farmerName === product.farmerName);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart`);
  };

  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

const getLocalImage = (name) => {
  const map = {
    potato: 'potato.jpg',
    tomato: 'tomato.jpg',
    carrot: 'carrots.jpg',
    spinach: 'spinach.jpg',
    apple: 'gapples.jpg',
    banana: 'banana.jpg',
    mango: 'mango.jpg',
    orange: 'orange.jpg',
    brinjal: 'brinjal.jpg',
    milk: 'milk.jpg',
    ghee: 'ghee.jpg',
    curd: 'curd.jpg',
    paneer: 'paneer.jpg',
    butter: 'butter.jpg',
    rice: 'rice.jpg',
    chana: 'chana.jpg',
    masoor: 'masoor.jpg',
    toor: 'toor.jpg',
    moong: 'moong.jpg',
    chilies: 'chilli.jpg',
    papaya: 'papaya.jpg'

  };

  const lowerName = name.toLowerCase();
  for (let key in map) {
    if (lowerName.includes(key)) {
      return `/images/${map[key]}`;
    }
  }

  return '/images/default.jpg'; // fallback image
};



  return (
    <div className="buyer-products">
      <input
        type="text"
        className="search-bar"
        placeholder="🔍 Search for a product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="product-list">
        {filtered.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filtered.map((product, index) => (
            <div className="product-card" key={index}>
              <img
                   src={getLocalImage(product.name)}
                   alt={product.name}
                   className="product-image"
              />

              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p><strong>₹{product.price} / {product.unit}</strong></p>
                <p>Status: {product.status}</p>
                <p className="seller-name">
                  👨‍🌾 Seller: <strong>{product.farmerName || 'Unknown'}</strong>
                </p>

                <div className="product-actions">
                  <label>Qty:</label>
                  <select
                    value={quantities[index] || 1}
                    onChange={(e) => handleQuantityChange(index, e.target.value)}
                  >
                    {[1, 2, 3, 4, 5].map(q => (
                      <option key={q} value={q}>{q}</option>
                    ))}
                  </select>
                  <span style={{ marginLeft: '6px' }}>{product.unit}</span>

                  <button onClick={() => handleAddToCart(product, index)}>
                    🛒 Add
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BuyerProducts;
