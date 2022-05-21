import React from 'react';
import { Link } from "react-router-dom";
import "../styles/JobSearch.css";

const {useState} =React;

const JobSearch = () => {
    const [Text,setText]=useState("");
    const onChange = evt => setText(evt.target.value);

    const onSubmit = evt =>{
        evt.preventDefault();
    }
    return(
        <div className='jobsearch-background-image'>
        <div className="slider-area">
            
            <div className="slider-active">
                <div className="single-slider slider-height d-flex align-items-center" data-background="assets/img/hero/h1_hero.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-9 col-md-10">
                                <div className="hero__caption">
                                    <h1>Find the Most Exciting Startup Jobs</h1>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-xl-8">
                                
                                <form action="#" onSubmit={onSubmit} className="searchbox-container">
                                    <div className="input-form">
                                    <input type="text" 
                                    placeholder="Job Position or Skill"
                                    value={Text}
                                    onChange={onChange}
                                    />
                                    </div>

                                    <div className='search-button-container'>         
                                    <button className="search-button">
                                        <Link to={`/job-search-result/${Text}`} >Search</Link> 
                                    </button>	
                                    </div>   
                                    
                                </form>	
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
);
};
    
export default JobSearch;