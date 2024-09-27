// import React from "react";
import './intro.css';
import bg from'../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll'

function Intro(){
    return (
        <>
            <section id="intro">
                <div className="introContent">
                    <span className="hello">Hello,</span>
                    <span className="IntroText">I`m <span className="IntroName">Pratik Raj </span><br />And Mern Stack Developer</span>
                    <p className="introPara">I am a skilled web designer with experience in creating visually appealing and user friendly websites.</p>
                    <Link><button className="btn"><img src={btnImg} alt="Hire Me" className='hire'/>Hire Me</button></Link>
                </div>
                <img src={bg} alt="Profile" className="bg"/>
            </section>
        </>
    )
}

export default Intro;