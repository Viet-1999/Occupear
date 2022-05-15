import React from 'react';
import { Link } from 'react-router-dom';
const ArticlesList = ({ articles }) => (
    <>
        {articles.map((article, key) => (
            <div style={{ textAlign: "left" }}>
                <div className="article-list-item" key={key}>
                    <Link to={`/article/${article.name}`}>
                        <h3 key={key}>{article.title}</h3>
                        <p key={key}>{article.content[0].substring(0, 500)}...</p>
                    </Link>
                </div>

            </div>
        ))}
    </>
);

export default ArticlesList;