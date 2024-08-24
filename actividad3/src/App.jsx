import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Programs from './components/Programs'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return(
  <div>
    <Header />
    <Programs />
    <ContactForm />
    <Footer />
  </div>
  )
}

export default App
