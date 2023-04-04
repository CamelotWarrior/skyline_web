import {Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, EffectFade, Thumbs} from 'swiper';
import React from 'react';
import { ccSlide } from './data/cc-character-slide';
import { ccSlideThumb } from './data/cc-character-thumb';
import { useState } from 'react';

import 'swiper/swiper.css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';


export default function Characters() {

    const [controlledSwiper, setControlledSwiper] = useState(null);

    return (
        <div className='character-page-wrapper'>
        <div className='character-slideshow-wrapper'>
        <div className='character-slideshow'>
            <Swiper
                modules={[EffectFade, Thumbs]}
                effect={'fade'}
                fadeEffect={{crossFade: true}}
                speed={400}
                slidesPerView={1}
                loop={true}
                onSwiper={setControlledSwiper}
                className='character-slides'>
                    {ccSlide.map((photo,i) =>
                        <SwiperSlide className='character-slide'>
                            <div className='character-slide-wrapper'>
                                <img className='character-slide-image' src={photo.image} alt={photo.alt} />
                                <div className='character-slide-content'>
                                <h3 className='character-slide-header'>{photo.name}</h3>
                                <p className='character-slide-name'>{photo.content}</p>
                                <p className='character-slide-text'>{photo.blurb}</p>
                                <div className='back-transparent-bar'/>
                            </div>
                            </div>
                        </SwiperSlide>
                    )}
            </Swiper>
            </div>
            <div className="character-spacer">
            <Swiper
                modules={[Navigation, Thumbs]}
                navigation={true}
                speed={400}
                slidesPerView={5}
                loop={true}
                thumbs={{ swiper : controlledSwiper }}
                centeredSlides={true}
                slideToClickedSlide={true}
                className='character-slides-thumbs'>
                    {ccSlideThumb.map((photo,i) =>
                        <SwiperSlide className='character-slide-thumb'>
                            <div className='character-slide-wrapper-thumb'>
                                <img className='character-slide-image-thumb' src={photo.image} alt={photo.alt} />
                                <div className='character-slide-content-thumb'>
                                <h3 className='character-slide-header-thumb'>{photo.name}</h3>
                            </div>
                            </div>
                        </SwiperSlide>
                    )}
            </Swiper>
            </div>
        </div>
        </div>
    )
};