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
    <div> 
        <div id = 'aboutAndPic'>    
            <img className ="profilePic" src= "https://raw.githubusercontent.com/mtownsend509/Portfolio-v2/main/public/images/Picture.webp" />
            <p id="aboutMeTest"> About Me <br/><br/><br/>I'm a fullstack web developer based in Seattle Washington. I graduated from the University of Washington with a major in  Cellular & Molecular biology, and a minor in English. This year I was inspired to make the jump from the life sciences industry into the tech industry, so I enrolled in, and recently graduated from an edX web development bootcamp, also hosted by the University of Washington (see resume tab for development skillset).
                Now I'm developing applications and sharpening my skills while expanding my skill set by learning Python and C#. Feel free to contact me with any coding opportunities from jobs to fun personal projects!
            </p>
        </div> 
        <div id="aboutList">
            <div id = 'aboutAndPic'>
            <p class="aboutMeHobbies">Volunteer Work <br/><br/><br/>
            Wildlife Rehabilitation: I have volunteered at a local wildlife rehabilitation center for the past two years. My duties have included feeding and caring for injured animals, assisting with medical treatments, and helping to release animals back into the wild. I am passionate about wildlife conservation and am dedicated to helping animals in need. <br/><br/>
Environmental Restoration: I have also volunteered with a local organization that focuses on restoring natural habitats and improving local ecosystems. This has involved planting trees and native vegetation, removing invasive species, and working to prevent erosion. I believe that it is important to protect our environment and to work towards a more sustainable future. <br/><br/>
Disaster Response: I have participated in disaster response efforts both locally and nation-wide. This has included providing aid and support to communities affected by hurricanes, floods, and other natural disasters. I have received training in emergency response and am committed to helping those in need during times of crisis. <br/><br/>
            </p>
            <img className ="profilePic" id='volunteerPic' src= "../images/Matt Flood Edited.JPG" />
            </div>
            <div id='aboutAndPic'>
            <img className ="profilePic" id='hobbiesPic' src= "https://raw.githubusercontent.com/mtownsend509/Portfolio-v2/main/public/images/Picture.webp" />
            <p class="aboutMeHobbies" id="end">Hobbies <br/><br/><br/>
            Playing Piano: Have you ever wanted all the benefit of hearing a 5 year old play terrible piano without all the hassel of having a kid of your own? Well hire me and I'll bring my keyboard into the office sometime! But really, playing an instrument has beneficial effects for memory and audiovisual processing. It's also a great way to relax!<br/><br/>
Hiking: I also love spending time in nature and exploring new trails. Hiking is a great way to disconnect from technology and connect with the world around me. Whether I am hiking through the mountains or along the coast, I enjoy the physical challenge and the stunning views.<br/><br/>
Gaming: In my free time, I also enjoy gaming. From Dungeons and Dragons to Rocket League, I find most games will offer a strategic challenge or an immersive storyline to offer a fun and unique experience. Gaming allows me to unwind and have fun while also developing problem-solving skills.<br/><br/>
            </p>
            </div>
        </div>
        </div>   
            
    </section> 
    );
}

export default aboutme