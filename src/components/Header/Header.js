import React from 'react';
import logourl from '../../assets/logo.svg';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logourl} alt="tesla" />
        </div>
    )
}
export default Header;