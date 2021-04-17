import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <div className="menu-bar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 d-flex align-items-center">
                        <div className="logo ">
                            <Link>
                                <h2>ReFit<span>.</span></h2>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-7 d-flex justify-content-center">
                        <div className="nav-bar ">
                            <nav className="navbar navbar-expand-lg">
                                <div className="container-fluid">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/about">About us</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/projects">Services</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/book">Bookings</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/addService">Admin</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex align-items-center">
                        <div className="login-btn">
                            <Link style={{ textDecoration: 'none' }} to="/login">
                                <p className="submit-btn">Login</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;