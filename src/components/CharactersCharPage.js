import {Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, EffectFade} from 'swiper';
import React from 'react';
import { ccSlide } from './data/cc-character-slide';

import 'swiper/swiper.css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';


export default function Characters() {
    return (
        <div className='character-slideshow-wrapper'>
            <Swiper
                modules={[Navigation, EffectFade]}
                navigation={true}
                effect={'fade'}
                fadeEffect={{crossFade: true}}
                speed={800}
                slidesPerView={1}
                loop
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
    )
};