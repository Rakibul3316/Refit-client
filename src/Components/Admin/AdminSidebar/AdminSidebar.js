import React from 'react';
import './AdminSidebar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserPlus, faListUl, faHome, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const AdminSidebar = () => {
    return (
        <section className="side-bar">
            <div className="logo admin-logo">
                <Link to="/">
                    <h2>ReFit<span>.</span></h2>
                </Link>
            </div>
            <div className="admin-nav">
                <div className="admin-nav-link">
                    <span><FontAwesomeIcon icon={faHome} /></span><Link to="/">Home</Link>
                </div>

                <div className="admin-nav-link">
                    <span><FontAwesomeIcon icon={faPlus} /></span><Link to="/addService">Add Service</Link>
                </div>

                <div className="admin-nav-link">
                    <span><FontAwesomeIcon icon={faUserPlus} /></span><Link to="/makeAdmin">Make Admin</Link>
                </div>

                <div className="admin-nav-link">
                    <span><FontAwesomeIcon icon={faListUl} /></span><Link to="/orderList">Order List</Link>
                </div>

                <div className="admin-nav-link">
                    <span><FontAwesomeIcon icon={faTrashAlt} /></span><Link to="/removeService">Remove Service</Link>
                </div>
            </div>
        </section>
    );
};

export default AdminSidebar;