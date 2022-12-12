import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UiProvider } from "../contexts";
import { CartProvider } from "../contexts/cart";

import { CssBaseline } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <UiProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </UiProvider>
    </CartProvider>
  );
}
