import React from 'react';
import { Link } from 'react-router-dom';
const mystyle = {
    font_size: "30px",
    padding: "16px",

};

const mystyle2 = {
    font_size: "30px",
    textAlign: "right",
    float: "right",
}

const mystyle3 = {
    marginLeft: "640px",
}


const NavBar = () => (
    <nav>
        <div id="mySidenav" className="sidenav">
            <a className="closebtn" onClick={closeNav}>&times;</a>
            <Link to="/">Occupear</Link>
            <Link to="/about">About</Link>
            <Link to="/articles-list">Article List</Link>
        </div>
        <ul>
            <li style={mystyle} onClick={openNav}>
                &#9776; 
            </li>
            <Link to="/" style={mystyle3}>Occupear</Link>
            <Link to="/about" id ="login" style={mystyle2}>Register</Link>
            <Link to="/articles-list" id ="login" style={mystyle2}>Login</Link>
        </ul>

    </nav>

);

const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("login").style.marginRight = "250px";
    document.getElementById("HomeButton").style.visibility = "hidden";
}

const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("login").style.marginRight = "0";
    document.getElementById("HomeButton").style.visibility = "visible";
}
export default NavBar;