import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Productpage from './components/Productpage';
import Loginpage from './components/Loginpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="login" element={<Loginpage />} />
      </Routes>
    </Router>
  );
};

export default App;

