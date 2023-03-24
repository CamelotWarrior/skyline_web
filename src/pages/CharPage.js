import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Characters from '../components/CharactersCharPage';
import '../styles/characters.css'

function CharPage() {

    return (
        <>
            <NavBar />
                <Characters/>
            <Footer />
        </>
    )
}

export default CharPage;