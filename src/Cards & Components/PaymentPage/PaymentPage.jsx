import CheckoutForm from "./CheckoutForm/CheckoutForm";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY)
const PaymentPage = () => {
    return (
        <div>

            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>

        </div>
    );
};

export default PaymentPage;