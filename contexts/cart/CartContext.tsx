import { createContext } from "react";
import { ICartProduct } from "../../interfaces/product";

interface ContextProps {
  isLoaded: boolean;
  cart: ICartProduct[];
  numberOfItems: number;
  subTotalPrice: number;
  tax_rate: number;
  totalPrice: number;
  // method
  addProductToCart: (product: ICartProduct) => void;
  updateProductQuantity: (product: ICartProduct) => void;
  removeCartProduct: (product: ICartProduct) => void;
}

export const CartContext = createContext({} as ContextProps);
