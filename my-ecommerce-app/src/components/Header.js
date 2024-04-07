import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
    return (
        <header className="header">
            <div>
                <div className = "logo">
                <img src="../images/logo.png" alt="" height="60" width="55" />
                </div>
                <p className="company-name">Company Name</p>
            </div>
            <nav>
                <div className="links">
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/products">Products</Link></div>
                    <div><Link to="/login">Login</Link></div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
