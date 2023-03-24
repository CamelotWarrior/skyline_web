import React from 'react';

export default function Footer() {
    return(
        <div className="footer-wrapper">
            <img src={require('../images/skyline_logo.png')} className='footer-logo' alt='Skyline Rem'/>
            <span className="footer-text">© Skyline Studios 2023. All Rights Reserved.</span>
            <div className="footer-socials">
            <a href="https://www.discord.com/invite/3HmKzFRM4p" target="_blank" className="footer-links" rel="noreferrer">
                <img src={require("../images/socials/discord_test.png")} className="footer-icon"  alt="Discord"/>
            </a>
            <a href="https://www.youtube.com/@Skyline_Rem" target="_blank" className="footer-links" rel="noreferrer">
                <img src={require("../images/socials/youtube_test.png")} className="footer-icon"  alt="YouTube"/>
            </a>
            <a href="https://twitter.com/SkylineRem" target="_blank" className="footer-links" rel="noreferrer">
                <img src={require("../images/socials/twitter_test.png")} className="footer-icon"  alt="Twitter"/>
            </a>
            <a href="https://www.tiktok.com/@skylinerem" target="_blank" className="footer-links" rel="noreferrer">
                <img src={require("../images/socials/tiktok.png")} className="footer-icon"  alt="TikTok"/>
            </a>
            <a href="https://www.instagram.com/skyline_rem/" target="_blank" className="footer-links" rel="noreferrer">
                <img src={require("../images/socials/instagram.png")} className="footer-icon"  alt="Instagram"/>
            </a>
            <a href="https://www.reddit.com/user/SkylineRem" target="_blank" className="footer-links" rel="noreferrer">
                <img src={require("../images/socials/reddit.png")} className="footer-icon"  alt="Reddit"/>
            </a>
            </div>
        </div> 
    )
}