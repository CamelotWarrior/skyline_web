import React from 'react';

export default function Footer() {
    return(
        <div className="footer-wrapper">
            <img src={require('../images/skyline_logo.png')} className='footer-logo' alt='Skyline Rem'/>
            <div className="footer-socials">
            <a href="https://www.discord.com/invite/3HmKzFRM4p" target="_blank" className="footer-links" rel="noreferrer">
                <img src={require("../images/socials/discord.png")} className="footer-icon"  alt="Discord"/>
            </a>
            <a href="https://www.youtube.com/@MythosSMP" target="_blank" className="footer-links" rel="noreferrer">
                <img src={require("../images/socials/youtube.png")} className="footer-icon"  alt="YouTube"/>
            </a>
            <a href="https://twitter.com/Mythos_SMP" target="_blank" className="footer-links" rel="noreferrer">
                <img src={require("../images/socials/twitter.png")} className="footer-icon"  alt="Twitter"/>
            </a>
            </div>
            <span className="footer-text">© Skyline Studios 2023. All Rights Reserved.</span>
        </div> 
    )
}