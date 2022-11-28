import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_PublickKey);
const Payment = () => {
    const order = useLoaderData();
    const {price, productName} = order;
    return (
        <div className='my-4 p-4 lg:p-8'>
            <h2 className='text-3xl font-bold text-center my-4'>Payment</h2>
            <p className='text-xl'>Please pay <strong>${price}</strong> for your order to buy <strong>{productName}</strong></p>
            <div className='w-96 my-16'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;