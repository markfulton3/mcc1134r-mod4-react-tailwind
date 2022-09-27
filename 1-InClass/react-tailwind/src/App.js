import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Navigation/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Favorites from './Pages/Favorites';

const App = () => {
  return (
    <>
       <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
       </Router>
       <Footer />
    </>
  )
}

export default App

