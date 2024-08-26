import React, { useState } from 'react';
import logo from '../assets/Aquagym.png'



  const Header = () => {
    return (
      <header className="bg-blue-600 text-white shadow-lg fixed w-full z-50 top-0" >
        <div className='container mx-auto flex justify-between items-center p-4' > 
          <div className='font-bold' >
            <a href="#hero">
              <img src={logo} alt="AquagymLogo" className='size-logo' />
            </a>
            <div>
              <nav className='hidden md:flex space x-8 '>
                <a href="#about-us" className='relative hover:text-secondary menu-link'>Nosotros</a>
                <a href="#" className=''>Competencias</a>
                <a href="">Testimonios</a>
                <a href="">Blog</a>
                
              </nav>
            </div>
          </div>
        </div>
        
      </header>
    );
  
  }

export default Header;
