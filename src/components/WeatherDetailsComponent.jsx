import React from 'react';
import './WeatherDetailsComponent.css'; 

// Project ID: my-weather-project-429906
// My Weather Project 

const WeatherDetailsComponent = ({ weatherData, currentDateTime }) => {
  
  const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

  return (
  <div className="weather-details-container">

    <div className="weather-details-header">
      <h3>Current Weather in {weatherData.name}</h3>
      <span className="current-date">{currentDateTime}</span>
    </div>

    <div className="weather-details-content">

      <div className="weather-details-part-01">
        <h4>{weatherData.name}</h4>
        <img src={iconUrl} alt={weatherData.weather[0].icon} className="weather-image" />
      </div>
      <div className="weather-details-part-02">

        <div className="weather-details-top">
          <div>
            <p className='lbl'>Latitude</p>
            <p className='val'>{weatherData.coord.lat}</p>
          </div>
          <div>
            <p className='lbl'>Longitude</p>
            <p className='val'>{weatherData.coord.lon}</p>
          </div>
          <div>
            <p className='lbl'>Weather</p>
            <p className='val'>{weatherData.weather[0].description}</p>
          </div>
        </div>
        <div className="weather-details-bottom">
          <div>
            <p className='lbl'>Temperature</p>
            <p className='val'>{weatherData.main.temp}°C</p>
          </div>
          <div>
            <p className='lbl'>Humidity</p>
            <p className='val'>{weatherData.main.humidity}%</p>
          </div>
          <div>
            <p className='lbl'>Wind Speed</p>
            <p className='val'>{weatherData.wind.speed} m/s</p>
          </div>
        </div>

      </div>
    </div>
  </div>
);
}

export default WeatherDetailsComponent;
