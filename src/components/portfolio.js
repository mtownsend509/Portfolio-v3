import react, { useState } from 'react';



// styles.fontDisplay.display = 'show';
// const ding = () =>  {
//     console.log('ding')
// }

// const setFont = () => {
//     if (styles.fontDisplay.display == 'none') {
//         // styles.fontDisplay.display = 'show';
//         console.log(styles.fontDisplay.display)
//     } else {
//         styles.fontDisplay.display = 'none';

//     }
// }


function Portfolio(props) { 

    let styles = {
        fontDisplay: {
            opacity: 0,
            transition: '.5s',
        },
    }

    const testing = (event) => {
        event.preventDefault();
        if (event.target.children[0].style.opacity ==  `0`) {
            event.target.children[0].style.opacity =  `100`
        } else if (event.target.children[0].style.opacity ==  `100`){
            event.target.children[0].style.opacity = `0`
        }
    }

    // const displayChange = () => {
    //     if (props.display == 'none') {
    //         props.setDisplay('block');
    //     } else {
    //         props.setDisplay('none');
    //     }
    // }

    return (
        <section id="work">

        <div className="workcardsRow">
            
            <div className="cardpadding"  style={{backgroundImage: `url(${props.html})`}}>
                <a href="https://a-day-in-the-leaf.herokuapp.com/" >   
                    <div className="card"
                    style={{backgroundImage: `url(https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?cs=srgb&dl=pexels-sohail-nachiti-807598.jpg&fm=jpg)`}}                         
                    onMouseEnter={testing}
                    onMouseLeave={testing}>
                        <h3
                        style = {styles.fontDisplay}
                        >A day in the leaf</h3>
                    {/* <a href=" https://mtownsend509.github.io/Refactoring-HTML-CSS-MattT/Develop/index.html"><img src={props.html} alt="HTML and CSS logos"/></a> */}
                    </div>
                </a>
            </div>

            <div className="cardpadding"  style={{backgroundImage: `url(${props.html})`}}>
                <a href="https://young-fjord-19401.herokuapp.com/" >   
                    <div className="card"
                    style={{backgroundImage: `url(https://images.everydayhealth.com/images/everything-you-need-know-about-fitness-1440x810.jpg)`}}                         
                    onMouseEnter={testing}
                    onMouseLeave={testing}>
                        <h3
                        style = {styles.fontDisplay}
                        >HackerFit</h3>
                    {/* <a href=" https://mtownsend509.github.io/Refactoring-HTML-CSS-MattT/Develop/index.html"><img src={props.html} alt="HTML and CSS logos"/></a> */}
                    </div>
                </a>
            </div>

            <div className="cardpadding"  style={{backgroundImage: `url(${props.html})`}}>
                <a href="https://cascadecolin.github.io/WikiMusix/" >   
                    <div className="card"
                    style={{backgroundImage: `url(https://www.incimages.com/uploaded_files/image/1920x1080/getty_626660256_2000108620009280158_388846.jpg)`}}                         
                    onMouseEnter={testing}
                    onMouseLeave={testing}>
                        <h3
                        style = {styles.fontDisplay}
                        >WikiMusix</h3>
                    {/* <a href=" https://mtownsend509.github.io/Refactoring-HTML-CSS-MattT/Develop/index.html"><img src={props.html} alt="HTML and CSS logos"/></a> */}
                    </div>
                </a>
            </div>

            <div className="cardpadding"  style={{backgroundImage: `url(${props.html})`}}>
                <a href="https://week19texteditor.herokuapp.com/" >   
                    <div className="card"
                    style={{backgroundImage: `url(https://s40424.pcdn.co/in/wp-content/uploads/2023/02/pexels-myburgh-roux-1102797-1140x900.jpg)`}}                         
                    onMouseEnter={testing}
                    onMouseLeave={testing}>
                        <h3
                        style = {styles.fontDisplay}
                        >Progressive Web App</h3>
                    {/* <a href=" https://mtownsend509.github.io/Refactoring-HTML-CSS-MattT/Develop/index.html"><img src={props.html} alt="HTML and CSS logos"/></a> */}
                    </div>
                </a>
            </div>

            <div className="cardpadding"  style={{backgroundImage: `url(${props.html})`}}>
                <a href="https://mtownsend509.github.io/Weather-Dashboard/" >   
                    <div className="card"
                    style={{backgroundImage: `url(https://s.abcnews.com/images/US/lightning-rf-gty-ml-220623_1655993296034_hpMain_1x1_608.jpg)`}}                         
                    onMouseEnter={testing}
                    onMouseLeave={testing}>
                        <h3
                        style = {styles.fontDisplay}
                        >Weather Dashboard</h3>
                    {/* <a href=" https://mtownsend509.github.io/Refactoring-HTML-CSS-MattT/Develop/index.html"><img src={props.html} alt="HTML and CSS logos"/></a> */}
                    </div>
                </a>
            </div>

            <div className="cardpadding"  style={{backgroundImage: `url(${props.html})`}}>
                <a href="https://github.com/mtownsend509/Social-Network-API" >   
                    <div className="card"
                    style={{backgroundImage: `url(https://hbr.org/resources/images/article_assets/2020/07/Jul20_13_1136201908.jpg)`}}                         
                    onMouseEnter={testing}
                    onMouseLeave={testing}>
                        <h3
                        style = {styles.fontDisplay}
                        >Social Network API</h3>
                    {/* <a href=" https://mtownsend509.github.io/Refactoring-HTML-CSS-MattT/Develop/index.html"><img src={props.html} alt="HTML and CSS logos"/></a> */}
                    </div>
                </a>
            </div>

        </div>
    </section>
    );
}

export default Portfolio
