import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticleList';
import '../Content.css';
const HomePage = () => (
    <>
        <h1 style={{ textAlign: 'center' }}>Occupear</h1>
        <div style={{ textAlign: 'center' }}>
            <a className="btn" >Job Recommendation</a>
        </div>

        <div id ="page-body" style={{ textAlign: 'center'}}>
            <ArticlesList articles={articleContent} />
        </div>
    </>

);

export default HomePage;