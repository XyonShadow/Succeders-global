import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Ministries from './pages/Ministries';
import Events from './pages/Events';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Give from './pages/give';
import VisitUs from './pages/VisitUs';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/give" element={<Give />} />
          <Route path="/visitus" element={<VisitUs />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;