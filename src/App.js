import logo from './logo.svg';
import './App.css';
import Aboutme from './components/aboutme';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import Navbar from './components/navbar';
import React, { useState } from 'react';
import html from './images/html and css.png';
import { SiLinkedin, SiGithub, SiTwitter } from "react-icons/si"

function App() {

  const [currentPage, setPage] = useState('aboutme');
  const [display, setDisplay] = useState('none');

  const renderBody = () => {
    if(currentPage === 'aboutme') {
      return <Aboutme />;
    } else if (currentPage === 'portfolio') {
      return <Portfolio 
      display={display} setDisplay={setDisplay} html={html}
      />;
    } else if (currentPage === 'contact') {
      return <Contact />;
    } else if (currentPage === 'resume') {
      return <Resume />
    }
  }

  const pageChange = (page) => setPage(page);

  return (
    <div className="headerFooter">
      <div>
        
        <header>
    
          <h1>Matthew Townsend</h1>
    
          <Navbar currentPage={currentPage} pageChange={pageChange} />
    
        </header>

        {renderBody()}

        <footer>        
          <ul className="footerList">
            <li><a href="https://twitter.com/MattT01960695"><SiTwitter /></a></li>
            <li><a href="https://www.linkedin.com/in/matthew-townsend-a81737223/"><SiLinkedin /></a></li>
            <li><a href="https://github.com/mtownsend509"><SiGithub /></a></li>
          </ul>
        
        </footer> 

      </div>
    </div>
  );
}

export default App;
