import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    const stripe = useStripe();
    const element = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !element) {
            return
        }

        const card = element.getElement(CardElement);
        if (card || null) {
            return
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;