import React, { useContext } from 'react';
import './SingleService.css'
import { Link } from 'react-router-dom';
import { ServiceContext } from '../../../App';

const SingleService = ({ service }) => {

    const { value, value2 } = useContext(ServiceContext);
    const [product, setProduct] = value;

    const handleClick = (data) => {
        setProduct(data)
    }

    return (
        <div className="col-md-4">
            <div className="single-service-card">
                <div className="single-service-img">
                    <img src={service.image} alt="" />
                </div>
                <div className="single-service-content">
                    <h4> {service.title} </h4>
                    <p> {service.description} </p>
                </div>
                <div className="single-service-price-place-order d-flex justify-content-between">
                    <p className="service-price">$ {service.price} </p>

                    <Link to="/book">
                        <button onClick={() => handleClick(service)} className="service-btn">Get Service</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default SingleService;