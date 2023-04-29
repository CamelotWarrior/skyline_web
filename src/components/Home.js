import React, {useState} from "react";


export default function Home() {

const [trailerVisible, setTrailerVisible] = useState(false);

const handleClick = () => {
    setTrailerVisible(current => !current);
}

function Trailer() {
    return (
    <div className="trailer-overlay">
        <button onClick={handleClick} className="close-button">X</button>
        <iframe className="trailerVideo" width="560" height="315" src="https://www.youtube.com/embed/k3l6-NzfwHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    )
}

    return(
            <div className='skyline-home'>
                <video className='home-video' autoPlay muted loop>
                    <source src={require('../videos/bg_adjusted.mp4')} type = 'video/mp4'/>
                </video> 
                <h1 className="home-text">Welcome Travelers</h1>
                <img src={require('../images/skyline_logo.png')} className='home-logo' alt='Skyline Rem'/>
                <button onClick={handleClick} className="trailer-button">Watch Trailer</button>
                {trailerVisible ? (<Trailer />) : null}
            </div>
    )
}
