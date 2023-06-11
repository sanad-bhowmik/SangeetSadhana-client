import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const CheckoutForm = ({ price, classImg, instructorImg }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (cardElement === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
      return;
    }

    setCardError("");
    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            email: user?.email || "Unknown",
            name: user?.displayName || "unknown",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      const transactionData = {
        paymentIntentId: paymentIntent.id,
        price: price,
        classImg: classImg,
        instructorImg: instructorImg,
      };

      // Make the POST request to the API endpoint
      axios
        .post("http://localhost:5000/payments", transactionData)
        .then((response) => {
          console.log("Data posted successfully:", response.data);
          // Handle the response or show a success message to the user
        })
        .catch((error) => {
          console.log("Error posting data:", error);
          // Handle the error or show an error message to the user
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "25px",
                fontWeight: "600",
                color: "#424770",
                "::placeholder": {
                  color: "#116D6E",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          className="bg-teal-400 mt-6 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          {processing ? "Processing..." : "Pay"}
        </button>
      </form>
      {cardError && <p>{cardError}</p>}
      {transactionId && <p>{transactionId}</p>}
    </>
  );
};

export default CheckoutForm;
