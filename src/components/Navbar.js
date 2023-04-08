import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { BiMenu, BiX } from "react-icons/bi";

export default function NavBar() {

const [isMobile, setIsMobile] = useState(false);


    return (
        <>
        <nav className='navbar'>
            <img src={require('../images/skylineLogo.png')} className='nav-image' alt='Skyline Rem'/>
            <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setIsMobile(false)}>
                <li className='nav-item'><Link className='nav-item' to="/">Home</Link></li>
                <li className='nav-item'><Link className='nav-item' to="/about">About</Link></li>
                <li className='nav-item'><Link className='nav-item' to="/characters">Characters</Link></li>
                <li className='nav-item'><Link className='nav-item' to="/news">News</Link></li>
                <li className='nav-item'><Link className='nav-item' to="/credits">Credits</Link></li>
            </ul>
            <button className="apply-button">
                    <Link className="apply-link" to="/apply">Apply Here</Link>
            </button>
            <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <BiX/> : <BiMenu/>}
            </button>
        </nav>
        </>
    )
}