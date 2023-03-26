import React from 'react';

export default function NewsContent(){
    return (
        <div className='news-page-content-wrapper'>
        <div className='news-page-header'>
            <img src={require('../images/header-news.png')} className='news-page-header-img' alt='News Header'/>
            <h1 className="news-page-header-text">NEWS</h1>
        </div>
        <div className='news-page-white-bar-top' />
        <div className='news-page-content-section'>
            <h2 className='news-page-coming-soon'>Coming Soon</h2>
            <p className='news-page-content-para'>Check back later for some amazing Skyline: Rem news!</p>
        </div>
    </div>
    )
}