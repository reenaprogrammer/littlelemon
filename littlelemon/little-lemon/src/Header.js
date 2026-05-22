import React from 'react';
import logo from './assets/logo.png'; // Ensure your logo asset is placed here

function Header() {
    return (
        <header>
            <img src={logo} alt="Little Lemon Logo" width="200" />
        </header>
    );
}

export default Header;