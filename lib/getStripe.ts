import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { IProductData } from "../types/product";

const stripePromise = loadStripe(`
  ${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!}
  `);

const createCheckoutSession = async (items: IProductData[]) => {
  const stripe = await stripePromise;
  const checkoutSession = await axios.post("/api/createCheckoutSession", {
    items
  });

  const result = await stripe?.redirectToCheckout({
    sessionId: checkoutSession.data.id
  });

  if (result?.error) {
    console.error(result.error.message);
  }
};

export { createCheckoutSession };
