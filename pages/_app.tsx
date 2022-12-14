import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UiProvider } from "../contexts";
import { CartProvider } from "../contexts/cart";

import { CssBaseline } from "@mui/material";
import { CheckoutProvider } from "../contexts/checkout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CheckoutProvider>
      <CartProvider>
        <UiProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </UiProvider>
      </CartProvider>
    </CheckoutProvider>
  );
}
