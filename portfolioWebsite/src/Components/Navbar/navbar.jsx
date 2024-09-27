import './navbar.css';
import logo from '../../assets/logo.png';
import contact from '../../assets/contact.png';
import { Link } from 'react-scroll';
import close from '../../assets/close.png'
import menu from '../../assets/menu.png'
import { useState } from 'react';

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo'/>
            <div className='desktopMenu'>
                <Link 
                    className="desktopMenuListItem" 
                    to="intro" 
                    activeClass='active'
                    spy={true}
                    smooth={true} 
                    duration={500}
                    offset={-80} // Adjust this offset if needed to prevent the section from hiding under fixed nav
                >
                    Home
                </Link>

                <Link 
                    className="desktopMenuListItem" 
                    to="skills" 
                    activeClass='active'
                    spy={true}
                    smooth={true} 
                    duration={500}
                    offset={-30}
                >
                    About
                </Link>

                <Link 
                    className="desktopMenuListItem" 
                    to="" 
                    activeClass='active'
                    spy={true}
                    smooth={true} 
                    duration={500}
                    offset={-80}
                >
                    Skills
                </Link>

                <Link 
                    className="desktopMenuListItem" 
                    to="works" 
                    activeClass='active'
                    spy={true}
                    smooth={true} 
                    duration={500}
                    offset={-80}
                >
                    Projects
                </Link>
            </div>

            <Link 
                className='desktopMenuBtn' 
                to="Contact" 
                activeClass='active'
                spy={true}
                smooth={true} 
                duration={500}
                offset={-70}
            >
                <img src={contact} alt="logo" className='logo'/> 
                Contact Me
            </Link>

            <img src={menu} alt="Mobile" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
                <Link 
                    className="ListItem" 
                    to="intro" 
                    activeClass='active'
                    spy={true}
                    smooth={true} 
                    duration={500}
                    offset={-80} // Adjust this offset if needed to prevent the section from hiding under fixed nav
                    onClick={()=>setShowMenu(false)}
                >
                    Home
                </Link>

                <Link 
                    className="ListItem" 
                    to="skills" 
                    activeClass='active'
                    spy={true}
                    smooth={true} 
                    duration={500}
                    offset={-30}
                    onClick={()=>setShowMenu(false)}
                >
                    About
                </Link>

                <Link 
                    className="ListItem" 
                    to="" 
                    activeClass='active'
                    spy={true}
                    smooth={true} 
                    duration={500}
                    offset={-80}
                    onClick={()=>setShowMenu(false)}
                >
                    Skills
                </Link>

                <Link 
                    className="ListItem" 
                    to="works" 
                    activeClass='active'
                    spy={true}
                    smooth={true} 
                    duration={500}
                    offset={-80}
                    onClick={()=>setShowMenu(false)}
                >
                    Projects
                </Link>

                <Link 
                className='ListItem' 
                to="Contact" 
                activeClass='active'
                spy={true}
                smooth={true} 
                duration={500}
                offset={-70}
                onClick={()=>setShowMenu(false)}
            >
                <img src={contact} alt="moblogo" className='logo'/>
                Contact Us
            </Link>
            </div>
        </nav>
        </>
    );
};

export default Navbar;