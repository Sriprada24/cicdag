import React from 'react';
import './MarketInfo.css';

const MarketInfo = () => {
  return (
    <div className="market-info-container">
      <h2>📊 Market Insights</h2>

      <div className="info-cards">

        {/* Seasonal Pricing Trends */}
        <div className="card">
          <h3>🌾 Seasonal Pricing Trends</h3>
          <ul>
            <li>Tomatoes: ₹20/kg → ₹32/kg (Last 3 weeks)</li>
            <li>Onions: ₹15/kg → ₹18/kg (Stable)</li>
            <li>Potatoes: ₹10/kg → ₹14/kg (Rising)</li>
          </ul>
        </div>

        {/* Most In-Demand Products */}
        <div className="card">
          <h3>🔥 Most In-Demand Products</h3>
          <ol>
            <li>Organic Tomatoes</li>
            <li>Green Chillies</li>
            <li>Cauliflower</li>
          </ol>
        </div>

        {/* Upcoming Harvest Calendar */}
        <div className="card">
          <h3>📅 Upcoming Harvest Calendar</h3>
          <ul>
            <li>Wheat – Ready by March</li>
            <li>Rice – Ready by October</li>
            <li>Mustard – Ready by February</li>
          </ul>
        </div>

        {/* Nearby Market Rates */}
        <div className="card">
          <h3>📍 Nearby Market Rates</h3>
          <ul>
            <li>Guntur: Chillies – ₹95/kg</li>
            <li>Kurnool: Cotton – ₹6,200/qtl</li>
            <li>Vijayawada: Mangoes – ₹38/kg</li>
          </ul>
        </div>

        {/* AI Suggestions */}
        <div className="card">
          <h3>🧠 AI Growing Suggestions</h3>
          <p>
            Based on current trends, consider growing **drip-irrigated tomatoes** and **early cauliflower** to meet market demand.
          </p>
        </div>

      </div>
    </div>
  );
};

export default MarketInfo;
