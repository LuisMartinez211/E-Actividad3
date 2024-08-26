import React from 'react';
import Header from './components/Header';

import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';


function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <main>
        <HeroSection />

        {/* About Us Section */}
         <section id="about-us">
         <AboutUs />
        </section>

      </main>
    </div>
  );
}

export default App;