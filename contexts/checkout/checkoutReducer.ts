import { CheckoutState } from "./";

type CheckoutActionType = { type: "CREATE BILLING"; payload: CheckoutState };

export const checkoutReducer = (
  state: CheckoutState,
  action: CheckoutActionType
): CheckoutState => {
  switch (action.type) {
    case "CREATE BILLING":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
