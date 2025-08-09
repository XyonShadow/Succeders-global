import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<div className="p-4">Home Page</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;