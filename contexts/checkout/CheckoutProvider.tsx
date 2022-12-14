import { FC, PropsWithChildren, useReducer } from "react";
import { CheckoutContext, checkoutReducer } from "./";

export interface CheckoutState {
  name: string;
  email: string;
  address: string;
}

const CHECKOUT_INITIAL_STATE: CheckoutState = {
  name: "",
  email: "",
  address: "",
};

export const CheckoutProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(checkoutReducer, CHECKOUT_INITIAL_STATE);
  const createBilling = (form: CheckoutState) => {
    dispatch({ type: "CREATE BILLING", payload: form });
  };
  return (
    <CheckoutContext.Provider value={{ ...state, createBilling }}>
      {children}
    </CheckoutContext.Provider>
  );
};
