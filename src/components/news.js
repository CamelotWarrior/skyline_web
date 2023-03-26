import React from 'react';
import { Link } from 'react-router-dom';

/*Custom component for the About section of the Skyline Rem Website.

    EDIT ABOUT CONTENT HERE
*/


export default function News() {
    return(
        <section className="skyline-news">
            <div className="news-photo">
            <img src={require('../images/SkylineNebPaint.png')} className='about-image' alt='about'/>        
            </div>
            <div className="skyline-text">
                <h1 className='skyline-news-header'>Skyline: Rem Newsfeed</h1>
                <p className='skyline-news-desc'>Access regularly updated announcements regarding trailers, events, and other exclusive content.</p>
                <button className="about-button">
                <Link className="about-link" to="/news">All News</Link>
                </button>
            </div>
        </section>
    )
}