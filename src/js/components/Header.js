import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="main-header">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className="header-nav">
                            <li className="nav-item">
                                <NavLink to={"/home"}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/gallery"}>Gallery</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/photographers"}>Photographers</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/about_us"}>About us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;