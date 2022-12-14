import { useContext } from "react";
import { CartContext } from "../contexts/cart";

export default function useCart() {
  const {
    addProductToCart,
    cart,
    isLoaded,
    numberOfItems,
    removeAllProducts,
    removeCartProduct,
    totalPrice,
    updateProductQuantity,
  } = useContext(CartContext);

  return {
    addProductToCart,
    cart,
    isLoaded,
    numberOfItems,
    removeAllProducts,
    removeCartProduct,
    totalPrice,
    updateProductQuantity,
  };
}
