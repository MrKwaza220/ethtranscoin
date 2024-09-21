// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import OperatorDashboard from './pages/operatordashboard/OperatorDashboard';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<> <Header /> <Home /></>} />
        <Route path="/operatordashboard" element={<OperatorDashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
