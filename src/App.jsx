import React, { useState } from 'react';
import { fetchWeather } from './weatherService';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (city) {
      setError('');
      setLoading(true);
      const data = await fetchWeather(city);
      setLoading(false);
      if (data) {
        setWeather(data);
      } else {
        setError('Error fetching weather data. Please try again.');
      }
    }
  };

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city"
      />
      <button onClick={handleSearch}>Search</button>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weather && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <img 
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
            alt={weather.weather[0].description} 
          />
          <p><strong>Weather:</strong> {weather.weather[0].description}</p>
          <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
          <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
          <p><strong>Wind Speed:</strong> {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;
