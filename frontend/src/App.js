// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import OperatorDashboard from './pages/OperatorDashboard/OperatorDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/operator-dashboard" element={<OperatorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
