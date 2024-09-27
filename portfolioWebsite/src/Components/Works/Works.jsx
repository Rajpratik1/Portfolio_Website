import './Works.css';
import { Link } from 'react-router-dom';
import NewsImg from '../../assets/New.avif';
import EcommerceImg from '../../assets/Ecommerce.png';
import ProjectsImg from '../../assets/Mini projects.png';

const Works = () => {
    return (
        <section id="works">
            <h1 className="work">Works/Projects</h1>
            <span className='desc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>

            <div className="cards">
                <div className='card'>
                    <img src={NewsImg} alt="News Website" className="News" />
                    <div className='card-content'>
                        <h2 className='heading'>News Website</h2>
                        <span >Not Completed Right Now</span>
                        <p className='heading'>Skills Used</p>
                        <div className='skill'>Html, Css, Javascript, React.js</div>
                        <button className='view'>
                            <Link to="/news"><p>View Project</p></Link>
                        </button>
                    </div>
                </div>

                <div className='card'>
                    <img src={EcommerceImg} alt="IndiKart" className="News" />
                    <div className='card-content'>
                        <h2 className='heading'>IndiKart</h2>
                        <span>Not Completed Right Now</span>
                        <p className='heading'>Skills Used</p>
                        <div className='skill'>Html, Css, Javascript, React.js</div>
                        <button className='view'>
                            <Link to="/indikart" ><p>View Project</p></Link>
                        </button>
                    </div>
                </div>

                <div className='card'>
                    <img src={ProjectsImg} alt="Mini Projects" className="News" />
                    <div className='card-content'>
                        <h2 className='heading'>Mini Projects</h2>
                        <span>Not Completed Right Now</span>
                        <p className='heading'>Skills Used</p>
                        <div className='skill'>Html, Css, Javascript, React.js</div>
                        <button className='view'>
                            <Link to="/miniprojects" ><p>View Project</p></Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;
