import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import LandingPage from './Screen/LandingPage/LandingScreen';
import ProductScreen from './Screen/ProductScreen/ProductScreen';
import CartScreen from './Screen/Cart/CartScreen';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/productScreen" element={<ProductScreen />} />
        <Route path="/cart" element={<CartScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
