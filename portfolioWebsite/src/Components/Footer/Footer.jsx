import { Link } from 'react-router-dom';
import Linkdin from '../../assets/linkdin.webp'
import Github from '../../assets/github.png'
import Leetcode from '../../assets/leetcode.png'
import './Footer.css'
const Footer =()=>{
    return(
        <footer className='footer'>
            <span className='copyright'>Copyright &#169; 2024 Pratik Raj. All right received</span>
            <div className='link'>
                    <Link to={'https://www.linkedin.com/in/pratik-raj-7521301bb/'}><img src={Linkdin} alt="" /></Link>
                    <Link to={'https://github.com/Rajpratik1'}><img src={Github} alt="" /></Link>
                    <Link to={'https://leetcode.com/u/Rajpratik/'}><img src={Leetcode} alt="" /></Link>
                </div>
        </footer>
    )
}
export default Footer;