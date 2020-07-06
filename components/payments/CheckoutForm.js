import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { BlueButton, Input, Card } from "../ui/DavidComponents";

export default function CheckoutForm(props) {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    window
      .fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Inter, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      receipt_email: email,
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: ev.target.name.value,
        },
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment-form">
      <style jsx>{`
        .payment-form {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1rem;
          -webkit-font-smoothing: antialiased;
          display: flex;
          justify-content: center;
          align-content: center;
          height: 100vh;
          width: 100vw;
        }
        form {
          width: 30vw;
          align-self: center;
        }
        label {
          font-size: 0.9rem;
          font-weight: 400;
          color: #2d3748;
          margin-bottom: 12px;
        }
        input {
          border-radius: 16px;
          margin-bottom: 6px;
          padding: 12px;
          padding-left: 16px;
          border: 1px solid #e2e8f0;
          max-height: 60px;
          font-size: 1rem;
          width: 100%;
          background: white;
          box-sizing: border-box;
          font-weight: 500;
          margin-bottom: 12px;
        }

        input::placeholder {
          color: #a0aec0;
        }

        input:focus {
          border-radius: 16px;
        }

        .result-message {
          line-height: 22px;
          font-size: 16px;
        }
        .result-message a {
          color: rgb(89, 111, 214);
          font-weight: 600;
          text-decoration: none;
        }
        .hidden {
          display: none;
        }
        .card-error {
          color: rgb(105, 115, 134);
          font-size: 16px;
          line-height: 20px;
          margin-top: 12px;
          text-align: center;
        }

        .card-element {
          border-radius: 16px;
          padding: 12px;
          border: 1px solid #e2e8f0;
          width: 100%;
          background: white;
          box-sizing: border-box;
          margin-bottom: 16px;
        }

        #payment-request-button {
          margin-bottom: 32px;
        }
        /* Buttons and links */
        button {
          background: #3182ce;
          color: #ffffff;
          border-radius: 16px;
          border: 1px solid #2a69ac;
          padding: 12px 16px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: block;
          transition: all 0.2s ease;
          box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          width: 100%;
        }
        button:hover {
          background: #2a69ac;
        }
        button:disabled {
          opacity: 0.5;
          cursor: default;
        }
        /* spinner/processing state, errors */
        .spinner,
        .spinner:before,
        .spinner:after {
          border-radius: 50%;
        }
        .spinner {
          color: #ffffff;
          font-size: 22px;
          text-indent: -99999px;
          margin: 0px auto;
          position: relative;
          width: 20px;
          height: 20px;
          box-shadow: inset 0 0 0 2px;
          -webkit-transform: translateZ(0);
          -ms-transform: translateZ(0);
          transform: translateZ(0);
        }
        .spinner:before,
        .spinner:after {
          position: absolute;
          content: "";
        }
        .spinner:before {
          width: 10.4px;
          height: 20.4px;
          background: #5469d4;
          border-radius: 20.4px 0 0 20.4px;
          top: -0.2px;
          left: -0.2px;
          -webkit-transform-origin: 10.4px 10.2px;
          transform-origin: 10.4px 10.2px;
          -webkit-animation: loading 2s infinite ease 1.5s;
          animation: loading 2s infinite ease 1.5s;
        }
        .spinner:after {
          width: 10.4px;
          height: 10.2px;
          background: #5469d4;
          border-radius: 0 10.2px 10.2px 0;
          top: -0.1px;
          left: 10.2px;
          -webkit-transform-origin: 0px 10.2px;
          transform-origin: 0px 10.2px;
          -webkit-animation: loading 2s infinite ease;
          animation: loading 2s infinite ease;
        }
        @keyframes loading {
          0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
        @media only screen and (max-width: 600px) {
          form {
            width: 80vw;
          }
        }
      `}</style>

      <form id="payment-form" onSubmit={handleSubmit}>
        <label>Email Address</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
        />
        <div id="card-element" className="card-element">
          <CardElement options={cardStyle} onChange={handleChange} />
        </div>
        <button isDisabled={processing || disabled || succeeded} id="submit">
          <span id="button-text">
            {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
          </span>
        </button>
        <BlueButton>Test</BlueButton>
      </form>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      {succeeded && (
        <p>
          Payment succeeded, see the result in your
          <a href={`https://dashboard.stripe.com/test/payments`}>
            {" "}
            Stripe dashboard.
          </a>{" "}
          Refresh the page to pay again.
        </p>
      )}
    </div>
  );
}
