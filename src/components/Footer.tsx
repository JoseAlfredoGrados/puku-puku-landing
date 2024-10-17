import React from 'react';
import { Coffee, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Coffee className="mr-2" />
            <span className="text-xl font-bold">Puku Puku Café</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-amber-200"><Facebook /></a>
            <a href="#" className="hover:text-amber-200"><Instagram /></a>
            <a href="#" className="hover:text-amber-200"><Twitter /></a>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p>&copy; 2024 Puku Puku Café. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;