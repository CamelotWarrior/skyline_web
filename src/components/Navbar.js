import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

export default function NavBar() {
    return (
        <>
        <nav className='navbar'>
            <img src={require('../images/skylineLogo.png')} className='nav-image' alt='Skyline Rem'/>
            <ul className='nav-links'>
                <li className='nav-item'><Link to="/">Home</Link></li>
                <li className='nav-item'><Link to="/about">About</Link></li>
                <li className='nav-item'><Link to="/characters">Characters</Link></li>
                <li className='nav-item'><Link to="/news">News</Link></li>
                <li className='nav-item'><Link to="/credits">Credits</Link></li>
            </ul>
        </nav>
        </>
    )
}