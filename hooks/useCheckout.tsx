import { useContext } from "react";
import { CheckoutContext } from "../contexts/checkout";
export default function useCheckout() {
  const { address, createBilling, email, name } = useContext(CheckoutContext);

  return { address, name, email, createBilling };
}
