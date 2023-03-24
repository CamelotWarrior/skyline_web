import React from 'react';

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
                <h1 className='skyline-news-header'>Keep up with Skyline: Rem</h1>
                <p className='skyline-news-desc'>Skyline Rem is a collaborative project with passionate creators and dedicated backstage. 
                Our goal is to provide a story to our tight-knit and kind-hearted community.</p>
            </div>
        </section>
    )
}