import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Programs from './components/Programs'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import ClubInfo from './components/ClubInfo'
import Competitions from './components/Competitions'
import Blog from './components/Blog'
import Testimonials from './components/Testimonials'

function App() {
  return(
    <div>
    <Header />
    <ClubInfo />
    <Programs />
    <Competitions />
    <Blog />
    <Testimonials />
    <ContactForm />
    <Footer />
  </div>
  )
}

export default App
