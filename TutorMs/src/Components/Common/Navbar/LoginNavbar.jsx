import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import React from 'react';

const LoginNavbar = () => {
    return (
        <nav className='login-navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    <img src={logo} alt='Logo' className='logo-image' />
                </Link>
                <div className='navbar-links'>
                    <Link to='/' className='nav-link'>Home</Link>
                </div>
            </div>
        </nav>
    );
}

export default LoginNavbar;
