import { useState } from 'react'
import './App.css'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import { Routes, Route } from 'react-router-dom';
import NotFound from './Components/NotFound';
import Navbar from './Components/NavBar';

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        {/* handling no match  */}
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>  
  );
}

export default App;
