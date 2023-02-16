import React from 'react';

/*Custom component for the About section of the Skyline Rem Website.

    EDIT ABOUT CONTENT HERE
*/


export default function About() {
    return(
        <section className="skyline-about">
            <div className="about-photo">
            <img src={require('../images/aboutplaceholder.png')} className='about-image' alt='about'/>        
            </div>
            <div className="skyline-text">
                <h1>About Skyline Rem</h1>
                <p>Skyline Rem is a collaborative project with passionate creators and dedicated backstage. 
                Our goal is to provide a story to our tight-knit and kind-hearted community.</p>
            </div>
        </section>
    )
}