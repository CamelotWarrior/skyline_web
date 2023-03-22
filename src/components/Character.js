import React, {useState, useEffect} from 'react';


/* export function getCharImages() {
    const charImages = ccSlide;
    return charImages;
} */

export default function Character() {
   /* const [currentCharImages, setCurrentCharImages] = useState(Math.floor(Math.random() * ccSlide.length));
    const changeCharacter = () => {
        const randomNumber = Math.floor(Math.random() * ccSlide.length);
        setCurrentCharImages(randomNumber);
    }
    
    useEffect(() => changeCharacter(), []); */
    
    return(
        <section className="skyline-character">
            <div className="character-photo">
            <img src={require('../images/CrystalV1.png')} className='character-image' alt='character'/>        
            </div>
            <div className="character-text">
                <h1 className='character-header'>Meet our travelers!</h1>
                <p className='character-desc'>Skyline Rem is a collaborative project with passionate creators and dedicated backstage. 
                Our goal is to provide a story to our tight-knit and kind-hearted community.</p>
                <button className="character-button">
                    Learn More
                </button>
            </div>
        </section>
    )
}