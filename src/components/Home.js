import React from "react";

export default function Home() {
    return(
            <div className='skyline-home'>
                <video width = '100%' height = '100%' autoPlay muted loop>
                    <source src={require('../videos/skylineweb.mp4')} type = 'video/mp4'/>
                </video> 
                <h1 className="home-text">Welcome to</h1>
                <img src={require('../images/skylineLogo.png')} className='home-logo' alt='Skyline Rem'/>
            </div>
    )
}
