import React from 'react';
import { Coffee } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-amber-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Coffee className="mr-2" />
          <span className="text-xl font-bold">Puku Puku Café</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-amber-200">Sobre Nosotros</a></li>
            <li><a href="#products" className="hover:text-amber-200">Productos</a></li>
            <li><a href="#testimonials" className="hover:text-amber-200">Testimonios</a></li>
            <li><a href="#contact" className="hover:text-amber-200">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;