import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticleList';
import '../Content.css';
import '../styles/HomePage.css';

const HomePage = () => (
    <>
        <div className='homepage-background-image'>
        <div className = "homepage-container">
        <div className='homepage-body'>
        <h1 style={{ textAlign: 'center'}}>Occupear</h1>
        <div style={{ textAlign: 'center' }}>
            <a className="btn" href = "/recommendation">Job Recommendation</a>
        </div>

        <div id ="page-body" style={{ textAlign: 'center'}}>
            <ArticlesList articles={articleContent} />
        </div>
        </div>
        </div>
        </div>
    </>

);

export default HomePage;