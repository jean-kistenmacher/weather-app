//https://openweathermap.org/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [search, setSearch] = useState('');
  const [iconUrl, setIconUrl] = useState('');
  const [cityWeather, setCityWeather] = useState({});
  const weatherAPIKey = 'ec89f27012340ab7a567a36736754331';

  function searchCity() {
    const cityEl = document.getElementById('city');
    errorMessage('');
    setSearch(cityEl.value);
  }

  function errorMessage(erro) {
    const error = document.getElementById('error');
    error.innerHTML = erro;
  }

  function getTemp(temp) {
    return Math.round(temp - 273.15);
  }

  function clearWeather() {
    document.getElementById('appWeather').innerHTML = '';
  }

  useEffect(() => {
    if (search === '') return;
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${weatherAPIKey}`
      )
      .then(response => {
        const city = response.data;
        console.log(response.data);
        setIconUrl(
          `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@4x.png`
        );
        setCityWeather(city);
      })
      .catch(function (erro) {
        errorMessage('Please search for a valid city');
      });
  }, [search]);

  return (
    <section className="app">
      <span className="made-by">
        Made with <span>❤</span> by Jean Kistenmacher
      </span>
      <div className="app-tittle">
        <h1>Simple Weather App</h1>
      </div>
      <div className="app-form">
        <input
          type="text"
          name="city"
          id="city"
          className="search-field"
          placeholder="Search your city"
        />
        <button className="submit-button" onClick={searchCity}>
          SUBMIT
        </button>
        <span id="error" className="error-message"></span>
      </div>

      <div id="appWeather">
        {cityWeather && cityWeather.main && (
          <div className="weather-card">
            <img src={iconUrl} alt="Weather icon"></img>
            <span>{cityWeather.name} </span>
            <span> / {getTemp(cityWeather.main.temp)}º</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default App;
