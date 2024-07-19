import React from 'react';
import './SearchComponent.css'; 

const SearchComponent = ({ city, latitude, longitude, setCity, setLatitude, setLongitude, onSearch }) => (
  <div className="search-container">

    <form onSubmit={onSearch}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <input
        type="text"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
        placeholder="Enter latitude"
        pattern="^-?\d+(\.\d+)?$"
      />
      <input
        type="text"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
        placeholder="Enter longitude"
        pattern="^-?\d+(\.\d+)?$"
      />
      <button type="submit">Search</button>
    </form>
    
  </div>
);

export default SearchComponent;
