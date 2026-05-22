import React from 'react';
import logo from './assets/logo.png';

function Header() {
    return (
        <header>
            <img src={logo} alt="Little Lemon Logo" className="logo-img" />
        </header>
    );
}

export default Header;