import React from 'react';
import './WeatherForecastComponent.css'; // Import the CSS file

const WeatherForecastComponent = ({ forecastData, fullForecastData, showFullForecast, handleViewMore }) => (
  <div className="weather-forecast-container">
    <div className="container-row">
      {(showFullForecast ? fullForecastData : forecastData).map((item, index) => (
        <div key={index} className="container-item">
          <h4>{new Date(item.dt_txt).toLocaleDateString()}</h4>
          <p>Weather: {item.weather[0].description}</p>
          <p>Temperature: {item.main.temp}°C</p>
          <p>Humidity: {item.main.humidity}%</p>
          <p>Wind Speed: {item.wind.speed} m/s</p>
        </div>
      ))}
    </div>
    <button className="view-more-button" onClick={handleViewMore}>
      {showFullForecast ? 'View Less' : 'View More ...'}
    </button>
  </div>
);

export default WeatherForecastComponent;
