import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import AboutPage from '../pages/AboutPage';
import ApplyPage from '../pages/ApplyPage';
import CharPage from '../pages/CharPage';
import HomePage from '../pages/HomePage';
import CreditsPage from '../pages/CreditsPage';


function navRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={ <HomePage/>}/>
                <Route path="/about" element={ <AboutPage/>}/>
                <Route path="/credits" element={ <CreditsPage/>}/>
                <Route path="/apply" element={ <ApplyPage/>}/>
                <Route path="/characters" element={ <CharPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default navRouter;