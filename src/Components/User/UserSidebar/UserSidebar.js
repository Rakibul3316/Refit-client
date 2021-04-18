import React from 'react';
import './UserSidebar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faCartPlus, faListUl, faHome } from '@fortawesome/free-solid-svg-icons'

const UserSidebar = () => {
    return (
        <div>
            <section className="side-bar">
                <div className="logo user-logo">
                    <Link to="/">
                        <h2>ReFit<span>.</span></h2>
                    </Link>
                </div>
                <div className="user-nav">
                    <div className="user-nav-link">
                        <span><FontAwesomeIcon icon={faHome} /></span><Link to="/">Home</Link>
                    </div>

                    <div className="user-nav-link">
                        <span><FontAwesomeIcon icon={faCartPlus} /></span><Link to="/book">Book</Link>
                    </div>

                    <div className="user-nav-link">
                        <span><FontAwesomeIcon icon={faListUl} /></span><Link to="/bookingList">Booking List</Link>
                    </div>

                    <div className="user-nav-link">
                        <span><FontAwesomeIcon icon={faCommentDots} /></span><Link to="/review">Review</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UserSidebar;