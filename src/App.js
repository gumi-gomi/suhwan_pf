import React, { useRef } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import { createGlobalStyle } from 'styled-components';
import Ending from './components/Ending';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body, html {
    margin: 0px;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
  }
`;

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
     <GlobalStyle />
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
        <Ending/>
    </>
  );
}

export default App;
