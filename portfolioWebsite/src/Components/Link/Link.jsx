// import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import Linkdin from '../../assets/linkdin.webp'
import Github from '../../assets/github.png'
import Leetcode from '../../assets/leetcode.png'
import Codechef from '../../assets/Codechef.png'
import gfg from '../../assets/gfg.svg'
import HackerRank from '../../assets/HackerRank.png'
import './Link.css'

const Footer =()=>{
    return(
        <footer className='Coading'>
            <h1 className='coad'>Coading Platform</h1>
            <div className='hacker'>
            <div className='Platform'>
                    <Link to={'https://www.linkedin.com/in/pratik-raj-7521301bb/'} className='link'><img src={Linkdin} alt="" /></Link>
                    <Link to={'https://github.com/Rajpratik1'} className='link'><img src={Github} alt="" /></Link>
                    <Link to={'https://leetcode.com/u/Rajpratik/'} className='link'><img src={Leetcode} alt="" /></Link>
                    <Link to={'https://www.codechef.com/users/rajpratik1'} className='link'><img src={Codechef} alt="" /></Link>
                    <Link to={'https://www.geeksforgeeks.org/user/rajpratik796/?ref=header_profile'} className='link'><img src={gfg} alt="" /></Link>
                    <Link to={'https://www.hackerrank.com/submissions/all/4'} className='link'><img src={HackerRank} alt="" /></Link>
                </div>
                </div>
        </footer>
    )
}
export default Footer;