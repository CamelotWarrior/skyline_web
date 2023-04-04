import React from 'react';
import NewsContent from '../components/NewsContent';

import'../styles/news.css';

function NewsPage() {
    return (
        <>
        <div className='news-page-content-wrapper'>
        <div className='news-page-header'>
            <img src={require('../images/header-news.png')} className='news-page-header-img' alt='News Header'/>
            <h1 className="news-page-header-text">NEWS</h1>
        </div>
        <div className='news-page-white-bar-top' />
            <NewsContent />
        </div>
        </>
    )
}

export default NewsPage;