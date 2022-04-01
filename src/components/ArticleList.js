import React from 'react';
import { Link } from 'react-router-dom';
const ArticlesList = ({ articles }) => (
    <>
        {articles.map((article, key) => (

            <div style={{ textAlign: "left" }}>

                <div className="article-list-item" key={key}>
                    <h3>{article.title}</h3>
                    <p>{article.content[0].substring(0, 150)}...<Link to={`/article/${article.name}`}>see more</Link></p>

                </div>

            </div>
        ))}
    </>
);

export default ArticlesList;