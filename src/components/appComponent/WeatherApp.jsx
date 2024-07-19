import React, { useState, useEffect } from 'react';
import SearchComponent from '../SearchComponent.jsx';
import WeatherDetailsComponent from '../WeatherDetailsComponent.jsx';
import WeatherForecastComponent from '../WeatherForecastComponent.jsx';

const WeatherApp = () => {
  const [city, setCity] = useState('Colombo');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showFullForecast, setShowFullForecast] = useState(false);
  const [fullForecastData, setFullForecastData] = useState([]);

  // const api_key = '2c53e16085916736c882d25b0b6326e6';
  // const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;
  // const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${api_key}`;

  const api_key = '2c53e16085916736c882d25b0b6326e6';
  const currentWeatherUrl = city
    ? `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`
    : `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key}`;
  const forecastUrl = city
    ? `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${api_key}`
    : `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key}`;

  const fetchWeatherData = async () => {
    if (!city && (!latitude || !longitude)) return;

    setLoading(true);
    setError('');
    try {
      const response = await fetch(currentWeatherUrl);
      if (!response.ok) throw new Error('Data not found');
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
    setLoading(false);
  };

  const fetchForecastData = async () => {
    if (!city && (!latitude || !longitude)) return;

    try {
      const response = await fetch(forecastUrl);
      if (!response.ok) throw new Error('Data not found');
      const data = await response.json();

      // Next 3 days
      const dailyForecasts = data.list.filter((item, index) => index % 8 === 0); // 8 data points per day
      setForecastData(dailyForecasts.slice(0, 3));

      // Next 5 days
      setFullForecastData(dailyForecasts);
    } catch (err) {
      setError(err.message);
      setForecastData([]);
      setFullForecastData([]);
    }
  };

  const formatDate = (date) => {
    const options = { month: 'long', day: 'numeric', weekday: 'long' };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const parts = formatter.formatToParts(date);
    const day = parts.find(part => part.type === 'day').value;
    const month = parts.find(part => part.type === 'month').value;
    const weekday = parts.find(part => part.type === 'weekday').value;

    const ordinalSuffix = (day) => {
      const lastDigit = day % 10;
      if (lastDigit === 1 && day !== 11) return 'st';
      if (lastDigit === 2 && day !== 12) return 'nd';
      if (lastDigit === 3 && day !== 13) return 'rd';
      return 'th';
    };

    return `${month}, ${day}${ordinalSuffix(day)} ${weekday}`;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeatherData();
    fetchForecastData();
  };

  useEffect(() => {
    if (city || (latitude && longitude)) {
      fetchWeatherData();
      fetchForecastData();
    }
  }, [city, latitude, longitude]);

  const handleViewMore = () => {
    setShowFullForecast(!showFullForecast);
  };

  const currentDateTime = formatDate(new Date());

  return (
    <div className="weather-app">
      <h2>Welcome to Loons Lab Weather Forecast</h2>
      
      <SearchComponent
        city={city}
        latitude={latitude}
        longitude={longitude}
        setCity={setCity}
        setLatitude={setLatitude}
        setLongitude={setLongitude}
        onSearch={handleSearch}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData && (
        <>
          <WeatherDetailsComponent
            weatherData={weatherData}
            currentDateTime={currentDateTime}
          />

          <WeatherForecastComponent
            forecastData={forecastData}
            fullForecastData={fullForecastData}
            showFullForecast={showFullForecast}
            handleViewMore={handleViewMore}
          />
        </>
      )}
    </div>
  );
};

export default WeatherApp;