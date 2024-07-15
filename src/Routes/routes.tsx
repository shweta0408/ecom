import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import LandingScreen from '../Screen/LandingPage/LandingScreen';

function RoutePage() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default RoutePage;
