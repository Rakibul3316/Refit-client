import React, { useEffect, useState } from 'react';
import './OurServices.css'
import SingleService from '../SingleService/SingleService';

const OurServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section className="container">
            <div className="our-services text-center">
                <div className="service-title">
                    <h1>Our <span>Service</span>Areas</h1>
                    <p>Explore Our Completed Services! Consectetur adipiscing elitt elit tellus, luctus pulvinar dapibus leoconsectetur luctus nec.</p>
                </div>
                <div className="service-cards">
                    <div className="row">
                        {
                            services.map(service => (<SingleService key={service._id} service={service}></SingleService>))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurServices;