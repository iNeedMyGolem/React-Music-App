import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


ReactDOM.render(
    <App />,
  document.getElementById('root')
);