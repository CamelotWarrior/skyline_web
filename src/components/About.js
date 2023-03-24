import React from 'react';
import { Link } from 'react-router-dom';

/*Custom component for the About section of the Skyline Rem Website.

    EDIT ABOUT CONTENT HERE
*/


export default function About() {
    return(
        <section className="skyline-about">
            <div className="about-photo">
            <img src={require('../images/newsplaceholder.png')} className='about-image' alt='about'/>        
            </div>
            <div className="skyline-text">
                <h1 className='skyline-about-header'>What is Skyline: Rem?</h1>
                <p className='skyline-about-desc'>Skyline Rem is a collaborative project with passionate creators and dedicated backstage. 
                Our goal is to provide a story to our tight-knit and kind-hearted community.</p>
                <div className = 'about-buttons-wrapper'>
                <div className= 'about-buttons'>
                <button className="about-button">
                    <Link className="about-link" to="/about">Learn More</Link>
                </button>
                </div>
            </div>
            </div>
        </section>
    )
}