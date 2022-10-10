import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <div className="nav-logo">

                </div>
                <div className="nav-menu">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/statistic'>Statistic</NavLink>
                    <NavLink to='/quiz'>Quiz</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;