import React, { useEffect, useState } from 'react';

const WeatherWidget = ({ location = 'Vijayawada' }) => {
  const [weather, setWeather] = useState(null);
  const API_KEY = "a949daf621b71fa462a21bbc6fc9bd17"; // <-- Replace this

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        );
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.error('Weather fetch failed:', err);
      }
    };

    fetchWeather();
  }, [location]);

  if (!weather || weather.cod !== 200) return <p>Loading weather...</p>;

  return (
    <div style={{
      backgroundColor: '#1284d6ff',
      padding: '15px',
      borderRadius: '8px',
      marginBottom: '20px'
    }}>
      <h3>Weather Update ☀️</h3>
      <p>Location: {weather.name}</p>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherWidget;
