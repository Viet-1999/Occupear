import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticleList';
import '../Content.css'
const ArticlesListPage = () => (
    <>
        <div id = "page-body">
            <h1 style={{ textAlign: "center" }}>Articles</h1>
            <ArticlesList articles={articleContent} />
        </div>
    </>

);

export default ArticlesListPage;