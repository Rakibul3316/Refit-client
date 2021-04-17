import React from 'react';
import './OurServices.css'
import SingleService from '../SingleService/SingleService';


const services = [
    {
        id: 1,
        img: "laptop-service.jpg",
        title: "Laptop Repair",
        description: "Leverage agile frameworks to provide a robust synopsis for high level overviews."
    },
    {
        id: 2,
        img: "computer-service.jpg",
        title: "Computer Repair",
        description: "Leverage agile frameworks to provide a robust synopsis for high level overviews."
    },
    {
        id: 3,
        img: "data-recovery.jpg",
        title: "Data Recovery",
        description: "Leverage agile frameworks to provide a robust synopsis for high level overviews."
    },
    {
        id: 4,
        img: "mobile-repair.jpg",
        title: "Phone Unlock",
        description: "Leverage agile frameworks to provide a robust synopsis for high level overviews."
    }
]

const OurServices = () => {
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
                            services.map(service => (<SingleService key={service.id} service={service}></SingleService>))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurServices;