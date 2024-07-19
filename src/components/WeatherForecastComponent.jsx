import React from 'react';
import './WeatherForecastComponent.css';

const WeatherForecastComponent = ({ forecastData, fullForecastData, showFullForecast, handleViewMore }) => {

  return (
    <div className="weather-forecast-container">
      <div className="container-row">
        {(showFullForecast ? fullForecastData : forecastData).map((item, index) => {
          const iconUrl = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
          
          return (
            <div key={index} className="container-item">
              <h4>{new Date(item.dt_txt).toLocaleDateString()}</h4>
              <p>{item.weather[0].description}</p>
              <img src={iconUrl} alt={item.weather[0].description} className="weather-image" />
              <div className="weather-table">
                <div className="weather-row">
                  <span className="weather-label">Temperature</span>
                  <span className="weather-value">{item.main.temp}°C</span>
                </div>
                <div className="weather-row">
                  <span className="weather-label">Humidity</span>
                  <span className="weather-value">{item.main.humidity}%</span>
                </div>
                <div className="weather-row">
                  <span className="weather-label">Wind Speed</span>
                  <span className="weather-value">{item.wind.speed} m/s</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="view-more-button" onClick={handleViewMore}>
        {showFullForecast ? 'View Less' : 'View More ...'}
      </button>
    </div>
  );
}

export default WeatherForecastComponent;
