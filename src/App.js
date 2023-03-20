import './styles/App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Credits from './components/Credits';
import Apply from './components/Apply';
import Footer from './components/Footer';
// import Nub from './components/nub';
import { getCredits, filterCredits } from './components/services/service-credits';
import { creditButtons } from './components/data/content-credit';
import React, { useState, useEffect } from 'react';

function App() {

//Code to set loading screen
const [loading, setLoading] = useState(false);
useEffect(() => {
  setLoading(true);
  setTimeout(() => setLoading(false), 3000);
}, []);

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
      {loading ? (
        <div className='loading'>
          <img src={require('./images/Nub.png')} className='loading-image' alt='Nebula Was Here :3'/>
        </div>
      ) : (
      <>
      <NavBar />
      {/*<Nub />*/}
      <div id="home">
      <Home />
      </div>
        <div id="about" className='about-wrapper'>
        <div className='container reveal'>
        <About />
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
        <div id="apply" className='apply-wrapper'>
        <div className='container reveal'>
        <Apply />
        </div>
        </div>
      <Footer />
      </>
      )}
    </div>
  );
}

export default App;

