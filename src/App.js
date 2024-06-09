// src/App.js
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import SkillsSection from './components/SkillsSection';

import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <SkillsSection />
  
      <Projects />
      <Contact />
      <Footer />
     
    </div>
  );
};

export default App;
