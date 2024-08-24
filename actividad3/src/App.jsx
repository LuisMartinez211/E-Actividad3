import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Programs from './components/Programs'

import Footer from './components/Footer'

function App() {
  return(
  <div>
    <Header />
    <Programs />
   
    <Footer />
  </div>
  )
}

export default App
