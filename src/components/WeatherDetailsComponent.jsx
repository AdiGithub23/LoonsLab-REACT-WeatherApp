import React from 'react';
import './WeatherDetailsComponent.css'; 

// Project ID: my-weather-project-429906
// My Weather Project 

const WeatherDetailsComponent = ({ weatherData, currentDateTime }) => (
  <div className="weather-details-container">
    <div className="weather-details-header">
      <h3>Current Weather in {weatherData.name}</h3>
      <span className="current-date">{currentDateTime}</span>
    </div>
    <div className="weather-details-content">
      <div className="weather-details-part-01">
        <h4>{weatherData.name}</h4>
        <img src="" alt="Weather Icon" className="weather-image" />
      </div>
      <div className="weather-details-part-02">
        <div className="weather-details-top">
          <div><p>Latitude: {weatherData.coord.lat}</p></div>
          <div><p>Longitude: {weatherData.coord.lon}</p></div>
          <div><p>Weather: {weatherData.weather[0].description}</p></div>
        </div>
        <div className="weather-details-bottom">
          <div><p>Temperature: {weatherData.main.temp}°C</p></div>
          <div><p>Humidity: {weatherData.main.humidity}%</p></div>
          <div><p>Wind Speed: {weatherData.wind.speed} m/s</p></div>
        </div>
      </div>
    </div>
  </div>
);

export default WeatherDetailsComponent;
