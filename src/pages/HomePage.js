import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';
import Character from '../components/Character';
import News from '../components/News';
const HomePage = () => {

//Code to handle visible on scroll
function reveal() {
var reveals = document.querySelectorAll(".reveal");

for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

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
<NavBar />
<div id="home">
<Home />
</div>
<div id="about" className='about-wrapper'>
<div className='about-white-bar-top'/>
<div className='container reveal'>
<About />
</div>
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
    </div>
</div>
<Footer />
</>
</div>
)
    }

export default HomePage;