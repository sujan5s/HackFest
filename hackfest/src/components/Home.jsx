import React, { useState } from "react";
import "./Home.css";
import sunny from "../images/sunny.png";
import SchemeUpdates from "./SchemeUpdates";
import { useLocation, useNavigate } from 'react-router-dom';

<<<<<<< HEAD
=======
function Home() {
  const navigate = useNavigate();
  const location = useLocation();
 
  const userId = location.state?.userId;

  const goToProfile = () => {
    navigate('/profile', { state: { userId } });
  };
  return (
    <div>
    
      <h1>Home </h1>
      
>>>>>>> 9a36478f99a0c04621c59f5d7b2bdf86071fdaf0

const WeatherApp = () => {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});
  const api_key = "e3c956ab07660d21379180255cb41a28";

  const search = async () => {
    if (!location) return;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`;
    const res = await fetch(url);
    const searchData = await res.json();
    setData(searchData);
    setLocation("");
  };

  return (
    <>
    <div className="weather-app">
      <div className="search">
        <div className="search-top">
          <i className="fa-solid fa-location-dot"></i>
          <div className="location">{data.name ? data.name : "Enter Location"}</div>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
        </div>
      </div>

      {/* Fire Icons */}
      <i className="fa-solid fa-fire fire-icon left"></i>
      <i className="fa-solid fa-fire fire-icon right"></i>

      <div className="weather">
        <img src={sunny} alt="sun" />
        <div className="weather-type">
          {data.weather ? data.weather[0].main : "—"}
        </div>
        <div className="temp">
          {data.main ? `${Math.round(data.main.temp)}°` : "—"}
        </div>
      </div>

      <div className="weather-date">
        <p>{new Date().toDateString()}</p>
      </div>

      <div className="weather-data">
        <div className="humidity">
          <div className="data-name">Humidity</div>
          <i className="fa-solid fa-droplet"></i>
          <div className="data">
            {data.main ? `${data.main.humidity}%` : "—"}
          </div>
        </div>
        <div className="wind">
          <div className="data-name">Wind</div>
          <i className="fa-solid fa-wind"></i>
          <div className="data">
            {data.wind ? `${data.wind.speed} km/h` : "—"}
          </div>
        </div>
      </div>
    </div>
    <div className="scheme-hub">
    <SchemeUpdates />
    </div>
  </> 
  );
};

export default WeatherApp;

