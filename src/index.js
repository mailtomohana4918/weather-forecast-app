import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { WeatherSearch } from './components/WeatherSearch'

ReactDOM.render(
  <React.StrictMode>
    <WeatherSearch />
  </React.StrictMode>,
  document.getElementById('root')
);

