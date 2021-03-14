import React, { useState } from 'react';
import Nav from './components/Navigation';
import About from './components/About';
import Resume from "./components/Resume";
import Contact from './components/Contact';
import Projects from './components/Projects';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    switch(currentPage){
      case 'Projects':
        return <Projects />
      case 'Contact':
        return <Contact />
      case 'Resume':
        return <Resume />
      default:
        return <About />
    }
  };
  return (
    <div>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
