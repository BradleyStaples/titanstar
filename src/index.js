import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import './styles/index.css';
import apiData from './api-data';

ReactDOM.render(
  <React.StrictMode>
    <App data={apiData} />
  </React.StrictMode>,
  document.getElementById('root')
);
