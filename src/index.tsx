import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import { worker } from './mocks/browser';

if (process.env.NODE_ENV !== 'development' && process.env.NODE_ENV !== 'production') {
  worker.start({
    serviceWorker: {
      url: '/permitteringsportal/mockServiceWorker.js',
    }
  })
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
