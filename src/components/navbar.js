import React from 'react';

function navbar({ currentPage, pageChange }) { 
    return (
        <ul className="headerList">
        <li className={currentPage === 'aboutme' ? 'activeTab' : ''}>
          <a
          onClick={() => pageChange('aboutme')}>About Me</a>
        </li>
    
        <li className={currentPage === 'portfolio' ? 'activeTab' : ''}>
          <a
          onClick={() => pageChange('portfolio')}>Portfolio</a>
        </li>
    
        <li className={currentPage === 'contact' ? 'activeTab' : ''}>
          <a 
          onClick={() => pageChange('contact')}>Contact</a>
        </li>
    
        <li className={currentPage === 'resume' ? 'activeTab' : ''}>
          <a 
          onClick={() => pageChange('resume')}>Resume</a>
        </li>
      </ul>
    );
}

export default navbar