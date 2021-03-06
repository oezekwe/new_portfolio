import React, { useState } from 'react';
import Nav from './components/Navigation';
import About from './components/About';
import Resume from "./components/Resume";
import Projects from './components/Projects';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    switch(currentPage){
      case 'Projects':
        return <Projects />
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
      <footer>
        <a href= "https://github.com/oezekwe"><img src= {`${process.env.PUBLIC_URL}/assets/images/git.png`} width="90px" height="90px" alt="Git_account"></img></a>
        <a href= "https://www.linkedin.com/in/obinna-ezekwe/"><img src= {`${process.env.PUBLIC_URL}/assets/images/linkedin.jpg`} width="90px" height="90px" alt="LinkedIn_account"></img></a>
      </footer>
    </div>
  );
}

export default App;
