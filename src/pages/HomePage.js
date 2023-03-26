import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';
import Character from '../components/Character';
import News from '../components/News';
import {Link} from 'react-router-dom';

import '../styles/home.css';

const HomePage = () => {

//Code to handle visible on scroll
function reveal() {
var reveals = document.querySelectorAll(".reveal");

for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 130;

    if (elementTop < windowHeight - elementVisible) {
    reveals[i].classList.add("active");
    } 
    /* else {
    reveals[i].classList.remove("active");
    } */

}
}

window.addEventListener("scroll", reveal);

return (
<div>
<>
<div id="home">
<Home />
</div>
<div id="about" className='about-wrapper'>
<div className='about-white-bar-top'/>
<div className='container reveal'>
<About />
</div>
<div className='about-white-bar-bottom'/>
</div>
<div id="characters" className='character-wrapper'>
    <div className='container reveal'>
        <Character />
        </div>
    </div>
    <div id="news" className='news-wrapper'>
    <div className='news-white-bar-top'/>
<div className='container reveal'>
<News />
</div>
<div className='news-white-bar-bottom'/>
</div>
<div id="credits" className="credit-wrapper">
<div className='container reveal'>
    <h1 className="credits-header">CREDITS</h1>
    <h3 className='credits-blurb'>Check out our team and support them on their various platforms!</h3>
    <button className="credit-button">
                    <Link className="credit-link" to="/Credits">View Credits</Link>
                </button>
    </div>
</div>
<Footer />
</>
</div>
)
    }

export default HomePage;