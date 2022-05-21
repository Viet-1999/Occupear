import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticleList';
import '../Content.css';
import '../styles/ArticleList.css';


const ArticlesListPage = () => (
    <>
        <div className='articlelist-background-image'>
        <div className='articlelist-container'>
        <div id = "page-body">
        <div className='articlelist-body'>
            <h1 style={{ textAlign: "center" }}>Articles</h1>
            <ArticlesList articles={articleContent} />
            </div>
        </div>
        </div>
        </div>
    </>

);

export default ArticlesListPage;