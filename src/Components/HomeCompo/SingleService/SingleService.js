import React from 'react';
import './SingleService.css'
import img from '../../../image/laptop-service.jpg'

const SingleService = ({ service }) => {

    console.log(service)
    return (
        <div className="col-md-4">
            <div className="single-service-card">
                <div className="single-service-img">
                    <img src={img} alt="" />
                </div>
                <div className="single-service-content">
                    <h4> {service.title} </h4>
                    <p> {service.description} </p>
                </div>
            </div>
        </div>
    );
};

export default SingleService;