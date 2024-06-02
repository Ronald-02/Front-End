import React from 'react'

// Import Pages
import Home from './../pages/Home';
import Contact from './../pages/Contact';
import About from './../pages/About';
import Works from './../pages/Works';

// Import Routes Route & UseLocation Hook
import { Routes, Route, useLocation } from 'react-router-dom'

// Import Animate Presense
import { AnimatePresence } from 'framer-motion';

const AnimRoutes = () => {

  const location = useLocation()

  return (
    <AnimatePresence initial={true} mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/works' element={<Works />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimRoutes