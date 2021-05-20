import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='headerDiv'>
            <img src='/Images/header-logo.png' className = 'headerImage'/>
            <h1 classname = 'headerText'>The Future is Clearer</h1>
        </div>
    );
};

export default Header;