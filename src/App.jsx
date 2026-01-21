import React from 'react'
import { useEffect, useState } from "react";
import './App.css'
import Navbar from './components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@splinetool/viewer';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Docs from './pages/Docs';
import Hire from './pages/Hire';





function App() {
  
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);



  return (
    <>
      <Navbar />
     
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/hire" element={<Hire />} />
      </Routes>
    
 
    </>
  )
}

export default App
