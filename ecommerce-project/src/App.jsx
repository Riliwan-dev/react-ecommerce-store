import React from 'react';
import { Routes, Route } from 'react-router-dom';  // ✅ FIXED
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/CheckoutPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
    </Routes>
  );
}

export default App;
