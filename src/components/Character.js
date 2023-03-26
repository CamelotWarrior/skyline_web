import {Link} from 'react-router-dom';


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
            <img src={require('../images/home-sil.png')} className='character-image' alt='character'/>        
            </div>
            <div className="character-text">
                <h1 className='character-header'>Meet our travelers!</h1>
                <p className='character-desc'>Meet our amazing travelers that have made their way into the world of Rem.</p>
                <button className="character-button">
                <Link className="character-link" to="/characters">View</Link>
                </button>
            </div>
        </section>
    )
}