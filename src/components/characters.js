import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { ccSlides } from './data/cc-character-slide';
import NavBar from './Navbar';
import Footer from './Footer';

const ContentSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <>
        <NavBar/>
        <section className='slider'>
            <MdKeyboardArrowLeft className="left-arrow" onClick={prevSlide} />
            <MdKeyboardArrowRight className="right-arrow" onClick={nextSlide} />
            {ccSlides.map((slide, index) => {
                return (
                    <div
                    className={index === current ? 'slide active' : 'slide'}
                    key={index}>
                        {index === current && (
                            <h3 className='ccSlideName'>{slide.name}</h3>
                        )}
                        {index === current && (
                            <h3 className='ccSlideBlurb'>{slide.blurb}</h3>
                        )}
                        {index === current && (
                            <img src={slide.image} alt={slide.alt} className='ccSlideImage' />
                        )}
                    </div>
                );
            })};
        </section>
        <Footer/>
        </>
    );
    
};

export default ContentSlider;
