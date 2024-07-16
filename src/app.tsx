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
import CheckoutPage from './Screen/Checkout/checkoutPage';
import Login from './Screen/login/loginpage';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/productScreen" element={<ProductScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
