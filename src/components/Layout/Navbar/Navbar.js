import React from 'react';
import './Navbar.css';
import logo from '../../../assets/images/b.png'
import { Link } from 'react-router-dom';


const NavBar = (props) => {
    return (
        <div className="navbar pr-m pl-m" id="navbar">

            <div className="navbar__logo">
                <img src={logo} width="50px" height="50px" alt="logo" />
            </div>
            <ul className="navbar__list">
                <Link to="/addPost"><span className="btn btn--rectangle btn--white">Add Posts</span></Link>
                <Link to="/posts"><span className="btn btn--rectangle btn--white">Posts</span></Link>
                <Link to="/users"><span className="btn btn--rectangle btn--white">Users</span></Link>
            </ul>
        </div>
    )
}

export default NavBar;