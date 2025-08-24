import React from 'react';
import { Facebook, MessageCircle, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        
        <div className="mb-3 mb-md-0">
          <h6 className="mb-0">&copy; 2025 Succeeders Global</h6>
        </div>
        
        <div>
          <a href="#" className="text-white mx-3" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-white mx-3" aria-label="Whatsapp">
            <MessageCircle size={20} />
          </a>
          <a href="#" className="text-white mx-3" aria-label="YouTube">
            <Youtube size={20} />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;