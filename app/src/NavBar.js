import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import homelogo from './assets/img/logo/Occupear3.png'
import EventBus from "./common/EventBus";
import AuthService from "./services/auth.service";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './components/NavbarElements';
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
            <Nav>
                <NavLink to='/'>
                    <img src={require('./assets/img/logo/Occupear3.png')} alt='logo' />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/' activestyle>
                        Home
                    </NavLink>
                    <NavLink to='/about' activestyle>
                        About Us
                    </NavLink>
                    <NavLink to='/articles-list' activestyle>
                        Article List
                    </NavLink>
                    <NavLink to='/job-search' activestyle>
                        Job Search
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>

                {
                    currentUser ? (
                        <NavBtn>

                            <NavBtnLink to={"/profile"} >
                                {currentUser.username}
                            </NavBtnLink>

                            <NavBtnLink to={"/login"} onClick={logOut}>
                                Logout
                            </NavBtnLink>
                        </NavBtn>
                    ) : (
                        <NavBtn>
                            <NavBtnLink to='/register'>Register</NavBtnLink>
                            <NavBtnLink to='/login'>Login</NavBtnLink>
                        </NavBtn>
                    )
                }
            </Nav>
        </>
    );


};


export default NavBar;

