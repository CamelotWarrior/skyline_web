import React from 'react';

export default function AboutContent(){

    return (
    <div className='about-page-content-wrapper'>
        <div className='about-page-header'>
            <img src={require('../images/header-about.png')} className='about-page-header-img' alt='About Header'/>
            <h1 className="about-page-header-text">ABOUT</h1>
        </div>
        <div className='about-page-content-section'>
            <div className='about-page-white-bar-top'/>
            <div className='about-page-content-title'>
            <div className='container reveal'>
                <h2 className='about-page-content-title-header'>Skyline: Rem</h2>
                <p className='about-page-content-title-para'>Skyline: Rem aims to provide a Minecraft experience never before seen in the Minecraft Roleplay genre.</p>
            </div>
            </div>
            <div className='about-page-content-story'>
            <div className='container reveal'>
                <h2 className='about-page-content-story-header'>Story</h2>
                <p className='about-page-content-story-para'>Several travelers find themselves in a new world where magic and monsters roam free. Through their journey, they aim to discover how and why they were brought into this new land with the uncanny ability to resist death.</p>
            </div>
            </div>
            <div className='about-page-content-dynamic'>
            <div className='container reveal'>
                <h2 className='about-page-content-dynamic-header'>Dynamic Perspectives</h2>
                <p className='about-page-content-dynamic-para'>With over a dozen content creators, the world of Rem can be explored from several different perspectives, each with their own unique journey.</p>
            </div>
            </div>
            <div className='about-page-content-world'>
            <div className='container reveal'>
                <h2 className='about-page-content-world-header'>Expansive World</h2>
                <p className='about-page-content-world-para'>With an expansive world of over 10k x 12k custom-built terrain (currently), the land of Rem will be open for brave adventurers to uncover new wonders within their new reality. Every city and dungeon has been hand-built by a passionate team of talented builders exclusively for this project.</p>
            </div>
            </div>
            <div className='about-page-content-creatures'>
            <div className='container reveal'>
                <h2 className='about-page-content-creatures-header'>Countless Creatures</h2>
                <p className='about-page-content-creatures-para'>Monstrous bosses and enemies populate the land, giving way for unique drops, fights, and treasures. By using a mod pack of over 200+ mods, every encounter is designed to provide a thrilling experience.</p>
            </div>
            </div>
            <div className='about-page-content-characters'>
            <div className='container reveal'>
                <h2 className='about-page-content-characters-header'>Unique Characters</h2>
                <p className='about-page-content-characters-para'>The world of Rem is heavily populated with carefully crafted and fully written NPCs that can be interacted with in a visual-novel style. These characters are just as alive as the content creators themselves.</p>
            </div>
            </div>
        </div>
    </div>
    )
}