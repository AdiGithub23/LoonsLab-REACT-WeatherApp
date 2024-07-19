import React, { useState } from 'react'
import Login from './components/loginComponent/Login.jsx'
import WeatherApp from './components/appComponent/WeatherApp.jsx'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Username: Loonslab
  // Password: labloons

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/app" /> : <Login onLogin={handleLogin} />} />
          <Route path="/app" element={isLoggedIn ? <WeatherApp /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App