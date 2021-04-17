import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="location">
                            <div className="footer-logo">
                                <Link>
                                    <h2>ReFit<span>.</span></h2>
                                </Link>
                            </div>
                            <p>203, Envato Labs, Behind Alis Steet, Melbourne,</p>
                            <p>Australia.immersion along the information close the loop on focusing</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="extra-service">
                            <h3>Services</h3>
                            <div className="extra-service-list">
                                <ol>
                                    <li>
                                        <Link>Kitchen Remodel</Link>
                                    </li>
                                    <li>
                                        <Link>Home Renovation</Link>
                                    </li>
                                    <li>
                                        <Link>Kitchen Remodel</Link>
                                    </li>
                                    <li>
                                        <Link>Home Repair</Link>
                                    </li>
                                    <li>
                                        <Link>Painting</Link>
                                    </li>
                                    <li>
                                        <Link>Bathroom Remodel</Link>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="opening-hour">
                            <h3>Opening Hours</h3>
                            <div className="openign-hour-list">
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul>
                                            <li>Monday - Tuesday</li>
                                            <li>Wednesday</li>
                                            <li>Thusday - Friday</li>
                                            <li>Starday</li>
                                            <li>Sunday</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-">
                                        <ul>
                                            <li>9.00 - 17.00</li>
                                            <li>9.00 - 16.00</li>
                                            <li>9.00 - 15.00</li>
                                            <li>9.00 - 16.00</li>
                                            <li>Closed</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;