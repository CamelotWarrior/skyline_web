import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';
import Character from '../components/Character';
import Credits from '../components/Credits';
import { getCredits, filterCredits } from '../components/services/service-credits';
import { creditButtons } from '../components/data/content-credit';
const HomePage = () => {

//Code to set Credits being rendered
const [filteredCredits, setFilteredCredits] = useState("");
useEffect(() => {
    setFilteredCredits(getCredits());
}, []);

//Code to handle Credit Change
function handleCredits(e) {
    let typeCredit = e.target.value;
    typeCredit !== ""
    ? setFilteredCredits(filterCredits(typeCredit))
    : setFilteredCredits(getCredits());
}

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
<div className='about-white-bar-bottom'/>
</div>
<div id="characters" className='character-wrapper'>
    <div className='container reveal'>
        <Character />
        </div>
    </div>
<div id="credits" className="credit-wrapper">
<div className='container reveal'>
    <h1 className="credits-header">CREDITS</h1>
    <div className="credits-menu">
    {creditButtons && creditButtons.map((type, index) => (
    <div className="credit-buttons-wrapper">
        <button key={index} value={type.value} onClick={handleCredits} className="credit-buttons">
        {type.name}
        </button>
    </div>
    ))}
    </div>
    <section className="credits-list">
    {filteredCredits && filteredCredits.map(credit => {
        return (
        <Credits
        key={credit.id}
        {...credit}/>
        )
    })}
    </section>
    </div>
</div>
<Footer />
</>
</div>
)
    }

export default HomePage;