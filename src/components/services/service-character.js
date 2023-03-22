import React from 'react';
import { ccSlide } from '../data/cc-character-slide';

export function getChars() {
    const charList = ccSlide;
    return charList;
}

export function CharImage(props) {
    return (
        <div className="character-photo">
        <img src={props.image} className="character-image" alt={props.alt}/>
        </div>
    )
}