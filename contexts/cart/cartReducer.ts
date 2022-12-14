import { ICartProduct } from "../../interfaces/product";
import { CartState } from "./";

type CartActionType =
  | {
      type: "[CART] - LoadCart from cookies | storage";
      payload: ICartProduct[];
    }
  | { type: "[CART] - Update Product"; payload: ICartProduct[] }
  | { type: "[CART] - Remove Product"; payload: ICartProduct[] }
  | { type: "[CART] - Change Product Quantity"; payload: ICartProduct[] }
  | {
      type: "[CART] - Update Order Summary";
      payload: {
        numberOfItems: number;
        subTotalPrice: number;
        tax_rate: number;
        totalPrice: number;
      };
    }
  | { type: "[CART] - Remove All" };

export const cartReducer = (
  state: CartState,
  action: CartActionType
): CartState => {
  switch (action.type) {
    case "[CART] - LoadCart from cookies | storage":
      return {
        ...state,
        isLoaded: true,
        cart: action.payload,
      };

    case "[CART] - Update Product":
      return {
        ...state,
        cart: action.payload,
      };
    case "[CART] - Remove Product":
      return {
        ...state,
        cart: action.payload,
      };
    case "[CART] - Change Product Quantity":
      return {
        ...state,
        cart: action.payload,
      };
    case "[CART] - Update Order Summary":
      return {
        ...state,
        ...action.payload,
      };
    case "[CART] - Remove All":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
