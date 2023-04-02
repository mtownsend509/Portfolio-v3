function aboutme() { 

    // const style = {
    //     transform: show ? 'rotate(180deg)' : '',
    //     transition: 'transform 150ms ease',
    // }

    const testing = (event) => {
        event.preventDefault();
        console.log(event.target.parentNode.nextSibling)
        if (event.target.parentNode.nextSibling.id ==  `aboutSection`) {
            event.target.parentNode.nextSibling.id="aboutTest"
            event.target.parentNode.children[1].style.transform = 'rotate(180deg)'
        } else if (event.target.parentNode.nextSibling.id == `aboutTest`){
            event.target.parentNode.nextSibling.id = `aboutSection`
            event.target.parentNode.children[1].style.transform = 'rotate(0deg)'
        }
    }

    let dropTest = '&#9662;'

    const arrow = (event) => {
        if (event.target.nextSibling.style.display ==  ``) {
            return '&#9662;'
        } else if (event.target.nextSibling.style.display == `block`){
            return '&#9652;'
        }
    }

    return (
    <section id="aboutMe">
            
        <img className ="profilePic" src= "https://raw.githubusercontent.com/mtownsend509/Portfolio-v2/main/public/images/Picture.webp" />
        <div id="aboutList">
            <div id="aboutTab"
            onClick={testing}
            >
              <h2 id="aboutH"
              >About</h2>
              <h2 id="arrow"
              >&#9662;</h2>
            </div>
            <p id="aboutSection"> &emsp;&emsp;I'm a fullstack web developer based in Seattle Washington. I graduated from the University of Washington with a major in  Cellular & Molecular biology, and a minor in English. This year I was inspired to start a change in my career path, so I enrolled in, and recently graduated from an edX web development bootcamp, also hosted by the University of Washington (see resume tab for development skillset).
            </p>
            {/* <div id="aboutFlab"
            onClick={testing}>
                <h2 id="aboutH">Hobbies</h2>
                <h2 id="arrow">&#9662;</h2>
            </div>
            <p id="aboutSection"> &emsp;&emsp;Just tryna test if this shit is easy
            </p>
            <div id="aboutFlab"
            onClick={testing}>
                <h2 id="aboutH">Volunteer Work</h2>
                <h2 id="arrow">&#9662;</h2>
            </div>
            <p id="aboutSection"> &emsp;&emsp;OMG look at this man he so generous he so kind I'll definitely hire
            </p> */}
        </div>
            
    </section> 
    );
}

export default aboutme