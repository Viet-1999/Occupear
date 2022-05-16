import React from 'react';
import { Link, useParams } from 'react-router-dom';
import articleContent from './article-content';
import ArticlesList from '../components/ArticleList';
import NotFoundPage from './NotFoundPage';
import '../Content.css';
import '../styles/Article.css'


const ArticlePage = () => {
    const { name } = useParams();
    const article = articleContent.find(article => article.name === name);

    if (!article) return <NotFoundPage />

    const otherArticles = articleContent.filter(article => article.name !== name);
    return (
        <>
            <div className='article-container'>
            <div id="page-body">
                <div className='article-body'>
                <h1>{article.title}</h1>
                {article.content.map((paragraph, key) => (
                    <p key={key}>{paragraph}</p>
                ))}
                </div>
                <p></p>
                <h3>Other Articles:</h3>
                <ArticlesList articles={otherArticles} />
            </div>
            </div>
        </>

    );
}

export default ArticlePage;