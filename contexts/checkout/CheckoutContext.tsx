import { createContext } from "react";
import { CheckoutState } from "./CheckoutProvider";

interface ContextProps {
  name: string;
  email: string;
  address: string;
  createBilling: (form: CheckoutState) => void;
}

export const CheckoutContext = createContext({} as ContextProps);
