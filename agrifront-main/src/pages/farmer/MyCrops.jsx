import React, { useState, useEffect } from 'react';
import './MyCrops.css';

const MyCrops = () => {
  const [crops, setCrops] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    quantity: '',
    unit: 'kg',
    imageUrl: '',
    description: '',
    status: 'Available'
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('crops')) || [];
    setCrops(stored.reverse());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddCrop = (e) => {
    e.preventDefault();
    const newCrop = { ...formData };
    const updated = [newCrop, ...crops];
    setCrops(updated);
    localStorage.setItem('crops', JSON.stringify(updated.reverse()));
    setFormData({
      name: '',
      price: '',
      quantity: '',
      unit: 'kg',
      imageUrl: '',
      description: '',
      status: 'Available'
    });
  };

  const handleDelete = (index) => {
    const updated = [...crops];
    updated.splice(index, 1);
    setCrops(updated);
    localStorage.setItem('crops', JSON.stringify(updated.slice().reverse()));
  };

  // ✅ Helper to get local image based on crop name
  const getLocalImage = (name) => {
    const map = {
      
    Potato: 'potato.jpg',
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
    chillies: 'chilli.jpg',
    papaya: 'papaya.jpg'

    };

    const lowerName = name.toLowerCase();
    for (let key in map) {
      if (lowerName.includes(key)) {
        return `/images/${map[key]}`;
      }
    }
    return '/images/default.jpg';
  };

  return (
    <div className="my-crops-container">
      <h2>🌱 Add a New Crop</h2>

      <form className="crop-form" onSubmit={handleAddCrop}>
        <input name="name" placeholder="Crop Name" value={formData.name} onChange={handleChange} required />
        <input name="price" placeholder="Price (₹)" type="number" value={formData.price} onChange={handleChange} required />
        <input name="quantity" placeholder="Quantity" type="number" value={formData.quantity} onChange={handleChange} required />

        <select name="unit" value={formData.unit} onChange={handleChange}>
          <option value="kg">Kg</option>
          <option value="litre">Litre</option>
          <option value="dozen">Dozen</option>
        </select>

        <input name="imageUrl" placeholder="Image URL (optional)" value={formData.imageUrl} onChange={handleChange} />
        <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} />

        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Available">Available</option>
          <option value="Sold Out">Sold Out</option>
        </select>

        <button type="submit">Add Crop</button>
      </form>

      <h2 style={{ marginTop: '40px' }}>🌾 My Crops</h2>

      {crops.length === 0 ? (
        <p>No crops added yet.</p>
      ) : (
        <div className="crops-grid">
          {crops.map((crop, index) => (
            <div className="crop-card" key={index}>
              <img
                src={crop.imageUrl || getLocalImage(crop.name)}
                alt={crop.name}
              />
              <div className="crop-info">
                <h3>{crop.name}</h3>
                <p>Price: ₹{crop.price}</p>
                <p>Qty: {crop.quantity} {crop.unit}</p>
                <p>Status: {crop.status}</p>
                <p><small>{crop.description}</small></p>
                <div className="actions">
                  <button className="edit-btn" onClick={() => alert('Edit coming soon')}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCrops;
