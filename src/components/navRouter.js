import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Navbar';
import AboutPage from '../pages/AboutPage';
import ApplyPage from '../pages/ApplyPage';
import CharPage from '../pages/CharPage';
import HomePage from '../pages/HomePage';
import CreditsPage from '../pages/CreditsPage';
import NewsPage from '../pages/NewsPage';


function NavRouter() {
    return (
        <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route exact path="/" element={ <HomePage/>}/>
                <Route exact path="/about" element={ <AboutPage/>}/>
                <Route exact path="/credits" element={ <CreditsPage/>}/>
                <Route exact path="/apply" element={ <ApplyPage/>}/>
                <Route exact path="/characters" element={ <CharPage/>}/>
                <Route exact path="/news" element={ <NewsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default NavRouter;