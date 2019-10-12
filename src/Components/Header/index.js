import React from 'react';
import './style.css';
import menuIcon from './../../assets/menu.svg';

const Header = () => {
    return (
        <div className="header-wrapper">
            <img src={menuIcon} className="menu-icon" alt="menu" />
            <span>Your Rides</span>
        </div>
    );
}

export default Header;