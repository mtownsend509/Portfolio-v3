import react, { useState } from 'react';


function Portfolio(props) { 

    let styles = ''

    if (window.innerWidth < 848) {
         styles = {
            fontDisplay: {
                opacity: 100,
                transition: '2s',
            },
        }
    } else {
        styles = {
        fontDisplay: {
            opacity: 0,
            transition: '2s',
        },     
    }
}

    // const testing = (event) => {
    //     event.preventDefault();
    //     if (event.target.children[0].style.opacity ==  `0`) {
    //         event.target.children[0].style.opacity =  `100`;
    //         event.target.children[1].style.opacity =  `100`
    //     } else if (event.target.children[0].style.opacity ==  `100`){
    //         event.target.children[0].style.opacity = `0`;
    //         event.target.children[1].style.opacity = `0`
    //     }
    // }

    const show = (event) => {
        event.preventDefault();
        event.target.style.opacity = '100';
        event.target.nextSibling.style.opacity = '100'
        if (window.innerHeight < 900) {
            event.target.parentNode.style.width = '45vh'
            return
        }
        event.target.parentNode.style.width = '38vh'
    }

    const hide = (event) => {
        event.preventDefault();
        console.log(window)
        if (window.innerWidth < 848) {
            return
        }
        event.target.style.opacity = '0';
        event.target.nextSibling.style.opacity = '0'
        if (window.innerHeight < 900) {
            event.target.parentNode.style.width = '35vh'
            return
        }
        event.target.parentNode.style.width = '30vh'
    }

    const showTwo = (event) => {
        event.preventDefault();
        event.target.style.opacity = '100';
        event.target.previousSibling.style.opacity = '100'
        if (window.innerHeight < 900) {
            event.target.parentNode.style.width = '45vh'
            return
        }
        event.target.parentNode.style.width = '38vh'
    }

    const hideTwo = (event) => {
        event.preventDefault();
        if (window.innerWidth < 848) {
            return
        }
        event.target.style.opacity = '0';
        event.target.previousSibling.style.opacity = '0';
        if (window.innerHeight < 900) {
            event.target.parentNode.style.width = '35vh'
            return
        }
        event.target.parentNode.style.width = '30vh'
        
    }

    return (
        <section id="work">

        <div className="workcardsRow">
            
            <div className="cardpadding"  style={{backgroundImage: `url(${props.html})`}}>
                <a href="https://a-day-in-the-leaf.herokuapp.com/" >   
                    <div className="card"
                    style={{backgroundImage: `url(https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?cs=srgb&dl=pexels-sohail-nachiti-807598.jpg&fm=jpg)`}}
                    >
                        <h3
                        style = {styles.fontDisplay}
                        onMouseEnter={show}
                        onMouseLeave={hide}
                        >A day in the leaf</h3>
                        <h3 className="cardDescription"
                        style = {styles.fontDisplay}
                        onMouseEnter={showTwo}
                        onMouseLeave={hideTwo}
                        >An interactive full stack app for plant caretaking that uses Node, Express, Handlebars, MySQL and Sequelize</h3>
                    {/* <a href=" https://mtownsend509.github.io/Refactoring-HTML-CSS-MattT/Develop/index.html"><img src={props.html} alt="HTML and CSS logos"/></a> */}
                    </div>
                </a>
            </div>

            <div className="cardpadding"  style={{backgroundImage: `url(${props.html})`}}>
                <a href="https://young-fjord-19401.herokuapp.com/" >   
                    <div className="card"
                    id = "fitImage"
                    style={{backgroundImage: `url(https://dailymom.com/portal/wp-content/uploads/2020/01/kike-vega-F2qh3yjz6Jk-unsplash.jpg)` }}
                    >
                        <h3
                        style = {styles.fontDisplay}
                        onMouseEnter={show}
                        onMouseLeave={hide}
                        >HackerFit</h3>
                        <h3 className="cardDescription" 
                        style = {styles.fontDisplay}
                        onMouseEnter={showTwo}
                        onMouseLeave={hideTwo}
                        >An interactive MERN-stack single page app that uses React, GraphQL, MongoDB, Mongoose ODM, JWTs, and Tailwind</h3>
                    {/* <a href=" https://mtownsend509.github.io/Refactoring-HTML-CSS-MattT/Develop/index.html"><img src={props.html} alt="HTML and CSS logos"/></a> */}
                    </div>
                </a>
            </div>

            <div className="cardpadding"  style={{backgroundImage: `url(${props.html})`}}>
                <a href="https://cascadecolin.github.io/WikiMusix/" >   
                    <div className="card"
                    style={{backgroundImage: `url(https://www.incimages.com/uploaded_files/image/1920x1080/getty_626660256_2000108620009280158_388846.jpg)`}}
                    >
                        <h3
                        style = {styles.fontDisplay}
                        onMouseEnter={show}
                        onMouseLeave={hide}
                        >WikiMusix</h3>
                        <h3 className="cardDescription"
                        style = {styles.fontDisplay}
                        onMouseEnter={showTwo}
                        onMouseLeave={hideTwo}
                        >An interactive app that uses Tailwind and third party APIs, and stores client side data to local storage.</h3>
                    {/* <a href=" https://mtownsend509.github.io/Refactoring-HTML-CSS-MattT/Develop/index.html"><img src={props.html} alt="HTML and CSS logos"/></a> */}
                    </div>
                </a>
            </div>

            <div className="cardpadding"  style={{backgroundImage: `url(${props.html})`}}>
                <a href="https://week19texteditor.herokuapp.com/" >   
                    <div className="card"
                    style={{backgroundImage: `url(https://s40424.pcdn.co/in/wp-content/uploads/2023/02/pexels-myburgh-roux-1102797-1140x900.jpg)`}}
                    >
                        <h3
                        style = {styles.fontDisplay}
                        onMouseEnter={show}
                        onMouseLeave={hide}
                        >PWA</h3>
                        <h3 className="cardDescription" 
                        style = {styles.fontDisplay}
                        onMouseEnter={showTwo}
                        onMouseLeave={hideTwo}
                        >An installable text editor that uses IndexedDB, Webpack, service workers, and babel</h3>
                    {/* <a href=" https://mtownsend509.github.io/Refactoring-HTML-CSS-MattT/Develop/index.html"><img src={props.html} alt="HTML and CSS logos"/></a> */}
                    </div>
                </a>
            </div>

            <div className="cardpadding"  style={{backgroundImage: `url(${props.html})`}}>
                <a href="https://mtownsend509.github.io/Weather-Dashboard/" >   
                    <div className="card"
                    style={{backgroundImage: `url(https://s.abcnews.com/images/US/lightning-rf-gty-ml-220623_1655993296034_hpMain_1x1_608.jpg)`}}
                    >
                        <h3
                        style = {styles.fontDisplay}
                        onMouseEnter={show}
                        onMouseLeave={hide}
                        >Weather Dashboard</h3>
                        <h3 className="cardDescription"
                        style = {styles.fontDisplay}
                        onMouseEnter={showTwo}
                        onMouseLeave={hideTwo}
                        >A simple weather forcast app that uses the third party APIs Moment.js, Bootstrap, and Open Weather</h3>
                    {/* <a href=" https://mtownsend509.github.io/Refactoring-HTML-CSS-MattT/Develop/index.html"><img src={props.html} alt="HTML and CSS logos"/></a> */}
                    </div>
                </a>
            </div>

            <div className="cardpadding"  style={{backgroundImage: `url(${props.html})`}}>
                <a href="https://github.com/mtownsend509/Social-Network-API" >   
                    <div className="card"
                    style={{backgroundImage: `url(https://hbr.org/resources/images/article_assets/2020/07/Jul20_13_1136201908.jpg)`}}                         
                    >
                        <h3
                        style = {styles.fontDisplay}
                        onMouseEnter={show}
                        onMouseLeave={hide}
                        >Social API</h3>
                        <h3 className="cardDescription"
                        style = {styles.fontDisplay}
                        onMouseEnter={showTwo}
                        onMouseLeave={hideTwo}
                        >A back end API that uses NoSQL database (mongodb) to create routes and create models</h3>
                    {/* <a href=" https://mtownsend509.github.io/Refactoring-HTML-CSS-MattT/Develop/index.html"><img src={props.html} alt="HTML and CSS logos"/></a> */}
                    </div>
                </a>
            </div>

        </div>
    </section>
    );
}

export default Portfolio
