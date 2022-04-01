import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticleList';
const HomePage = () => (
    <>
        <h1 style={{ textAlign: 'center' }}>Occupear</h1>
        <div style={{ textAlign: 'center' }}>
            <a className="btn" >Job Recommendation</a>
        </div>
        <div style={{ textAlign: 'center' , maxWidth: 700}}>
            <ArticlesList articles={articleContent} />
        </div>
    </>

);

export default HomePage;