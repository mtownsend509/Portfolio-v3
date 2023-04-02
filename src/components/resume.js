import React from 'react';
import ResLink from '../images/Resume.pdf';


function Resume() { 
    return (
    <div id = 'resumeDiv'>
        {/* // <a href = '/images/Under Construction.webp' download>
        //     <img src = '/images/Under Construction.webp'/>
        // </a> */}
        <h1>Developer Skill Set:</h1>
        <ul id='skillList'>
            <li>HTML</li>
            <li>CSS</li>
            <li>RESTful API Development & Useage</li>
            <li>Node</li>
            <li>Object-Oriented Programming</li>
            <li>Express</li>
            <li>MySQL/Sequelize and MongoDB/Mongoose</li>
            <li>Object Relational Mapping</li>
            <li>Model-View-Controller paradigm</li>
            <li>Progressive Web Applications</li>
            <li>React</li>
            <li>GraphQL</li>
            <li>MERN-stack Development</li>
            <a href = {ResLink} download>
            <li id='resItem'>Click Here to Download my Resume!</li>
            </a>
        </ul>
    </div>
    );
}

export default Resume