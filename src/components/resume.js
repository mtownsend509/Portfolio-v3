import React from 'react';
import ResLink from '../images/Resume.pdf';


function Resume() { 
    const testing = (event) => {
        event.preventDefault();
        console.log(event.target.parentNode)
        if (event.target.parentNode.nextSibling.id ==  `aboutSection`) {
            event.target.parentNode.nextSibling.id="aboutTest"
            event.target.parentNode.children[1].style.transform = 'rotate(180deg)'
            event.target.parentNode.style.borderTopLeftRadius = '0px'
            event.target.parentNode.style.borderTopRightRadius = '0px'
        } else if (event.target.parentNode.nextSibling.id == `aboutTest`){
            event.target.parentNode.nextSibling.id = `aboutSection`
            event.target.parentNode.children[1].style.transform = 'rotate(0deg)'
            event.target.parentNode.style.borderTopLeftRadius = '15px'
            event.target.parentNode.style.borderTopRightRadius = '15px'
        }
    }

    return (
    <div id = 'resumeDiv'>
        {/* // <a href = '/images/Under Construction.webp' download>
        //     <img src = '/images/Under Construction.webp'/>
        // </a> */}
        {/* <h1>Developer Skill Set:</h1>
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
        </ul> */}
        <div id ="resContainer">
        <div id="aboutList">
            <div id="aboutTab"
            onClick={testing}
            >
              <h2 id="aboutH"
              >Developer Skillset</h2>
              <h2 id="arrow"
              >&#9662;</h2>
            </div>
        <ul id='aboutSection' class="devContainer">
            <ul className = "devList">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>RESTful API Development & Usage</li>
            <li>Node</li>
            <li>Object-Oriented Programming</li>
            <li>Express</li>
            </ul>
            <ul class = "devList">
            <li>MySQL/Sequelize and NoSQL (MongoDB/Mongoose)</li>
            <li>Object Relational Mapping</li>
            <li>Model-View-Controller paradigm</li>
            <li>Progressive Web Applications</li>
            <li>React</li>
            <li>GraphQL</li>
            <li>MERN-stack Development</li>
            </ul>
        </ul>
        </div>

        <div id="aboutList">
            <div id="aboutTab"
            onClick={testing}
            >
              <h2 id="aboutH"
              >Education</h2>
              <h2 id="arrow"
              >&#9662;</h2>
            </div>
            <div id="aboutSection" class="devContainer">
            <p >WEB DEVELOPMENT EDX CERTIFICATION | UNIVERSITY OF WASHINGTON 2023
            </p>
            <p>
            BACHELOR OF SCIENCE, CELLULAR/MOLECULAR BIOLOGY | UNIVERSITY OF WASHINGTON 2016
            </p>
            </div>
        </div>

        </div>

        <div id="aboutList">
            <div id="aboutTab"
            onClick={testing}
            class = 'lastTab'
            >
              <h2 id="aboutH"
              >Work History</h2>
              <h2 id="arrow"
              >&#9662;</h2>
            </div>
            <div id="aboutSection" class="devContainer">
                <div id='lineDiv'>
                <h2 id ="jobTitle">Flow Contract Site Laboratory| QC Specialist | 23/Oct/21 - 18/Mar/23</h2>
                </div>
                <ul id ='jobList'>
                <li id="jobDescription">
                Worked in a CAP/CLIA, Biohazard level 2 laboratory performing quality control on generated 
data, daily instrument maintenance and set-up, and solution preparation.
                </li>
                <li id='jobDescription' className = 'lastListItem'>
                Assisted in pre-clinical lab operations, performing immunoassays, tissue dissociation, intracellular 
staining, operation of flow cytometers, and cytogram analysis.
                </li>
                </ul>
                <div id='lineDiv'>
                <h2 id ="jobTitle">Field Technician | IDAX Data Solutions | 03/Oct/18 – 05/Jun/21</h2>
                </div>
                <ul id ='jobList'>
                    <li id='jobDescription'>
                    Created satellite maps of project site locations in ArcGIS and Kappturit, QC’d and processed data 
(made client ready), interacted with clients, handled project level client coordination.

                    </li>
                    <li id='jobDescription' className='lastListItem'>
                    Collected traffic and ADA compliance data. Installed data collection hardware at specified 
locations using satellite mapping systems such as ArcGIS and Kappturit. Maintained equipment 
and vehicle
                    </li>
                </ul>
                <div id='lineDiv'>
                <h2 id ="jobTitle">Assistant Supervisor | Washington Conservation Corps | 03/Oct/16 – 22/Sep/18</h2>
                </div>
                <ul id ='jobList'>
                    <li id='jobDescription'>
                    Worked with FEMA to provide relief during Puerto Rico’s 2018 hurricane Maria recovery, and 
Louisiana’s 2017 post-flood recovery.
                    </li>
                    <li id='jobDescription'>
                    Worked with State Parks to complete several projects including maintenance of ecological 
recovery sites, and hiking trail maintenance/improvement
                    </li>
                    <li id='jobDescription' className='lastListItem'>
                    Gained proficiencies in plant identification, ecological maintenance strategies, power equipment
usage, chemical handling, problem solving, teamwork, and community relations.
                    </li>
                </ul>
            </div>
            <a href = {ResLink} download>
            <p id='resItem'>Click Here to Download my Resume!</p>
            </a>
        </div>

    </div>
    );
}

export default Resume