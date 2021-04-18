import React from 'react';
import './SingleBookOrder.css'

const SingleBookOrder = ({ order }) => {
    return (
        <div className="col-md-4">
            <div className="single-order">
                <div className="order-list-img d-flex justify-content-between">
                    <img src={order.imageURL} alt="" />
                    <button className="order-condition-btn">pending</button>
                </div>
                <div className="order-list-content">
                    <h5> {order.serviceTitle} </h5>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem itaque rerum consequatur incidunt voluptatum quis ea quasi id adipisci dolor. </p>
                </div>
            </div>
        </div>
    );
};

export default SingleBookOrder;