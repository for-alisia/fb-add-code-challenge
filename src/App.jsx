import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AddsPage, ProductsPage, EditAddPage } from './pages';
import Notification from 'components/Notification/Notification';
import Header from 'components/Header/Header';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/:productId/adds" element={<AddsPage />} />
          <Route path="/:productId/adds/:addId" element={<EditAddPage />} />
          <Route path="/" element={<ProductsPage />} />
        </Routes>
        <Notification />
      </Router>
    </div>
  );
};

export default App;
