import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage';
import ClubInfo from './components/ClubInfo';
import Programs from './components/Programs';
import Competitions from './components/Competitions';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/club-info" element={<ClubInfo />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;
