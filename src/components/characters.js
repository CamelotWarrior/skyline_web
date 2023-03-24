import SwiperCore, {Navigation, Pagination, Scrollbar, Ally, EffectFade} from 'swiper';
import {Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';

import 'swiper/swiper.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/navigation/pagination.scss';
import 'swiper/components/navigation/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, Ally, EffectFade]);

export default function Characters(props) {
    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
        <SwiperSlide>
            <div className="character-slide">
            <img src={props.image} className="character-image" alt={props.name}/>
            <h3 className="character-slide-header">{props.name}</h3>
            <p className="character-slide-text">{props.blurb}</p>
            </div>
        </SwiperSlide>
        </Swiper>
    )
};