import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter } from "react-router-dom";
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51Ifws1K0lwDlduxCQLDmGw8jAgWcUpVlAPNJtkxQbwve206HMh2gbhxhf5z5rTjELqhp3T5yLCRONHxpt2wW1Pwd0028SCWMH4');

const ProcessPayment = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <Elements stripe={stripePromise}>
                        <SimpleCardForm></SimpleCardForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default ProcessPayment;