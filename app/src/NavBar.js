import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import homelogo from './assets/img/logo/Occupear3.png'
import EventBus from "./common/EventBus";
import AuthService from "./services/auth.service";
const NavBar = () => {

    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
            setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
            setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
        }

        EventBus.on("logout", () => {
            logOut();
        });

        return () => {
            EventBus.remove("logout");
        };
    }, []);

    const logOut = () => {
        AuthService.logout();
        setShowModeratorBoard(false);
        setShowAdminBoard(false);
        setCurrentUser(undefined);
    };

    return (
        <>
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
                                    {currentUser ? (
                                        <div className="header-btn d-none f-right d-lg-block">
                                          
                                                <Link to={"/profile"} className="btn head-btn2">
                                                    {currentUser.username}
                                                </Link>
            
                                                <a href="/login" className="btn head-btn1" onClick={logOut}>
                                                    LogOut
                                                </a>        
                                        </div>
                                    ) : (
                                        <div className="header-btn d-none f-right d-lg-block">
                                            <Link to="/register/" className="btn head-btn1">Register</Link>
                                            <Link to="/login" className="btn head-btn2">Login</Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};


export default NavBar;