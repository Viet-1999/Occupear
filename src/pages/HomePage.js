import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticleList';
const HomePage = () => (
    // <>
    //     <h1 style={{ textAlign: 'center' }}>Hello, welcome to my blog!</h1>
    //     <div style={{ textAlign: 'center' }}>
    //         <a className="btn" >Job Recommendation</a>
    //     </div>
    //     <div style={{ textAlign: 'center' , maxWidth: 700}}>
    //         <ArticlesList articles={articleContent} />
    //     </div>
    // </>
    
    <>
        <div class="slider-area ">
            <div class="slider-active">
                <div class="single-slider slider-height d-flex align-items-center" data-background="assets/img/hero/h1_hero.jpg">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-9 col-md-10">
                                <div class="hero__caption">
                                    <h1>Find the most exciting startup jobs</h1>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-8">
                                <form action="#" class="search-box">
                                    <div class="input-form">
                                        <input type="text" placeholder="Job Tittle or keyword" />
                                    </div>
                                    <div class="select-form">
                                        <div class="select-itms">
                                            <select name="select" id="select1">
                                                <option value="">Location BD</option>
                                                <option value="">Location PK</option>
                                                <option value="">Location US</option>
                                                <option value="">Location UK</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="search-form">
                                        <a href="#">Find job</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    </>
);

export default HomePage;