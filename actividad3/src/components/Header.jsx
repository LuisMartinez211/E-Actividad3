import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">Club de Natación</h1>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-4">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/club-info">Información del Club</Link></li>
            <li><Link to="/programs">Programas</Link></li>
            <li><Link to="/competitions">Competencias</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/testimonials">Testimonios</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
