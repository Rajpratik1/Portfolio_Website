import './About.css'
import UIDesign from '../../assets/ui-design.png'
import AppDesign from '../../assets/app-design.png'
import WebDesign from '../../assets/website-design.png'
import BackEnd from '../../assets/BackEnd.png'
  
function About(){
    return(
        <section className='skills'>
        <span className="skilltitle">What Can I Do For You</span>

        <span className="skillsDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am in HTML, CSS, Javascript, React, MongoDB, Node.js, Express.js.</span>
        
        <div className="skillBars">
        
            <div className="skillBar">
                <img src={UIDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text, you can write your own content here.</p>
                </div>
            </div>
            
            <div className="skillBar">
                <img src={WebDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website design</h2>
                    <p>This demo text can be changed while making the production ready site.</p>
                </div>
            </div>
            
            <div className="skillBar">
                <img src={AppDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App design</h2>
                    <p>You can write  text related to mobile app development.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={BackEnd} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Backend Skills </h2>
                    <p>You can write  text related to mobile app development.</p>
                </div>
            </div>
        
        </div>
        
        </section>
    )
}

export default About;