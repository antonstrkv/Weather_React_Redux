import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { store } from './Redux/storeRTK.js';

const main = ReactDOM.createRoot(document.getElementById('main'));
main.render(
  <Provider store={store}>
    <App />
  </Provider>
);

