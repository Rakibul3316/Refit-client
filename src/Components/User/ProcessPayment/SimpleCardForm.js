import React, { useContext, useState } from 'react';
import './SimpleCardForm.css'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { ServiceContext } from '../../../App';

const SimpleCardForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)
    // console.log(paymentSuccess)
    const { value, value2 } = useContext(ServiceContext);
    const [product] = value;
    console.log(product)
    const [loggedInUser] = value2;

    const handleSubmit = async (event) => {



        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message)
            setPaymentSuccess(null)
        } else {
            // console.log('[PaymentMethod]', paymentMethod);
            setPaymentSuccess(paymentMethod.id)
            setPaymentError(null)
            alert('Your order place succesfully')
        }

        const order = {
            userName: loggedInUser.name,
            userEmail: loggedInUser.email,
            serviceTitle: product.title,
            servicePrice: product.price,
            serviceId: product._id,
            paymentId: paymentMethod.id,
            imageURL: product.image
        }

        fetch("http://localhost:5000/addOrders", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(order)
        })

    };

    return (
        <div className="book-wrapper">
            <div>
                <form onSubmit={handleSubmit}>
                    <input name="name" defaultValue={loggedInUser.name} className='form-control' type="text" />
                    <input name="email" defaultValue={loggedInUser.email} className='form-control' type="email" />
                    <input name="designation" defaultValue={product.title} placeholder="Designation" className='form-control' type="text" />
                    <h6 className="pb-3">pay with</h6>
                    <CardElement className="InputContainer" />
                    <div className="d-flex justify-content-between">
                        <p>Your service charge will be $ {product.price} </p>
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