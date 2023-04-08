import '../styles/hamburger.css';
import MobileNav from './MobileNav';
//import { useState } from 'react';

export default function Hamburger(){


    return (
        <>
            <div className='hamburger'>
                <div className='burger burger1' />
                <div className='burger burger2' />
                <div className='burger burger3' />
            </div>
            <MobileNav/>
        </>
    )
}