import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <section className="header">
            <div className="header-content">
                <div className="header-title">
                    <h3>Repair Shop</h3>
                    <h1>Trusted Repair <span>Services</span></h1>
                </div>
                <div className="header-btn">
                    <Link>Read More</Link>
                </div>
            </div>
        </section>
    );
};

export default Header;