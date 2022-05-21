import React, { useState, useEffect } from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticleList';
import '../Content.css';
import '../styles/HomePage.css';
import AuthService from '../services/auth.service';

const HomePage = () => {
    const [currentUser, setCurrentUser] = useState(undefined);
    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        }
    }, []);
    return (
        <>
            <div className='homepage-background-image'>
                <div className="homepage-container">
                    <div className='homepage-body'>
                        <h1 style={{ textAlign: 'center' }}>Occupear</h1>
                        {
                            currentUser ? (
                                <div style={{ textAlign: 'center' }}>
                                    <a className="btn" href="/recommendation">Job Recommendation</a>
                                </div>
                            ) : (

                                <div style={{ textAlign: 'center' }}>
                                    <a className="btn" href="/register">Job Recommendation</a>
                                </div>
                            )
                        }
                        <div id="page-body" style={{ textAlign: 'center' }}>
                            <ArticlesList articles={articleContent} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default HomePage;