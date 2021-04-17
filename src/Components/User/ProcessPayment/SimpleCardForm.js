import React, { useState } from 'react';
import './SimpleCardForm.css'
import { CardElement, useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';


const SimpleCardForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message)
            setPaymentSuccess(null)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setPaymentSuccess(paymentMethod.id)
            setPaymentError(null)
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h6 className="pb-3">pay with</h6>
                    <CardElement className="InputContainer" />
                    <div className="d-flex justify-content-between">
                        <p>Your service charge will be $1000</p>
                        <button className="submit-btn" type="submit" disabled={!stripe}>Pay</button>
                    </div>
                </form>
            </div>
            {
                paymentError && <p className="text-danger"> {paymentError} </p>
            }
            {
                paymentSuccess && <p className="text-success">Thank You for your payment</p>
            }
        </div>
    );
};

export default SimpleCardForm;