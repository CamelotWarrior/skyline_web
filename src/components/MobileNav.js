import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/mobilenav.css';

export default function MobileNav() {
    return(
        <ul className='mobile-nav'>
        <li className='mobile-nav-item'><Link className='mobile-nav-item' to="/">Home</Link></li>
        <li className='mobile-nav-item'><Link className='mobile-nav-item' to="/about">About</Link></li>
        <li className='mobile-nav-item'><Link className='mobile-nav-item' to="/characters">Characters</Link></li>
        <li className='mobile-nav-item'><Link className='mobile-nav-item' to="/news">News</Link></li>
        <li className='mobile-nav-item'><Link className='mobile-nav-item' to="/credits">Credits</Link></li>
    </ul>
    )
}