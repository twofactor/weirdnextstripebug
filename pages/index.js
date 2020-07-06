//stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../components/payments/CheckoutForm";

const promise = loadStripe("pk_test_YaGGJ9LuRsicBx5EtdEuOlEx00Z45bwqCx");

export default function Payments() {
  return (
    <Elements stripe={promise}>
      <CheckoutForm />
    </Elements>
  );
}
