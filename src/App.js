import React from 'react'

// Import Components 
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';

// Import Router
import { BrowserRouter as Router } from 'react-router-dom';



const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    </>
  )
};
  
export default App
