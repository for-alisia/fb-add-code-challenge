import React from 'react';
import ReactDOM from 'react-dom/client';
import Providers from 'context/index';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Providers.ProductProvider>
      <Providers.AddsProvider>
        <Providers.NotificationProvider>
          <App />
        </Providers.NotificationProvider>
      </Providers.AddsProvider>
    </Providers.ProductProvider>
  </React.StrictMode>
);
