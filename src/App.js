import React, { useRef } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';

function App() {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    const offset = -60;
    const elementPosition = sectionRef.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth', // 부드러운 스크롤
    });
  };


  return (
    <>
      <Header  
        scrollToSection={scrollToSection} 
        refs={{ aboutRef, skillRef, projectRef }} 
      />
        <div ref={aboutRef}>
         <About />
        </div>
        <div ref={skillRef}>
          <Skill/>
        </div>
        <div ref={projectRef}>
          <Project/>
        </div>
    </>
  );
}

export default App;
