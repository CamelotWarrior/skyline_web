import React from 'react';
import {Link} from 'react-scroll';

export default function NavBar() {
    return (
        <nav className='navbar'>
            <img src={require('../images/skylineLogo.png')} className='nav-image' alt='Skyline Rem'/>
            <ul className='nav-links'>
                <li className='nav-item'><Link activeClass='visual' to="home" spy={true} smooth={true} alt="home">Home</Link></li>
                <li className='nav-item'><Link activeClass='visual' to="about" spy={true} smooth={true} alt="about">About</Link></li>
                <li className='nav-item'><Link activeClass='visual' to="characters" spy={true} smooth={true} alt="characters">Characters</Link></li>
                <li className='nav-item'><Link activeClass='visual' to="news" spy={true} smooth={true} alt="news">News</Link></li>
                <li className='nav-item'><Link activeClass='visual' to="credits" spy={true} smooth={true} alt="credits">Credits</Link></li>
            </ul>
        </nav>
    )
}