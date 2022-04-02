import React from 'react';
import { Link } from 'react-router-dom';
import homelogo from './assets/img/logo/Occupear3.png'
const NavBar2 = () => (
        <div className="header-area header-transparrent" >
            <div className="headder-top header-sticky">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-2">
                        {/*Logo*/}
                            <div className="logo">
                                <Link to="/"><img src={homelogo} alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <div className="menu-wrapper">
                            {/* Main-menu */}
                                <div className="main-menu">
                                    <nav className="d-none d-lg-block">
                                        <ul id="navigation">
                                            <li><Link to="/">Occupear</Link></li>
                                            <li><Link to="/about">About</Link></li>
                                            {/* <li><Link to="/articles-list">Article List</Link></li> */}
                                            <li><Link to="/jobs-list/">Job List</Link></li>
                                            <li><Link to="/job-detail">Job Detail</Link></li>
                                            <li><Link to="/job-search">Job Search</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                                {/*header-btn*/}
                                <div className="header-btn d-none f-right d-lg-block">
                                    <Link to="/register/" className="btn head-btn1">Register</Link>
                                    <Link to="/login" className="btn head-btn2">Login</Link>
                                </div>
                            </div>
                        </div>
                        {/*something mobile menu? */}
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);

export default NavBar2;