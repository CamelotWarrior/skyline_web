import React from "react";

export default function Home() {
    return(
            <div className='skyline-home'>
                <video className='home-video' autoPlay muted loop>
                    <source src={require('../videos/bg_adjusted.mp4')} type = 'video/mp4'/>
                </video> 
                <h1 className="home-text">Welcome to</h1>
                <img src={require('../images/skyline_logo.png')} className='home-logo' alt='Skyline Rem'/>
            </div>
    )
}
