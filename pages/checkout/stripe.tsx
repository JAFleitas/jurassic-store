import styles from "../../styles/Home.module.css";
import StripeCheckout, { Token } from "react-stripe-checkout";
import { Box } from "@mui/material";
import { CheckoutContext } from "../../contexts/checkout";
import { useContext } from "react";
import { jurassicApi } from "../../api";
import { CartContext } from "../../contexts/cart";
import { useRouter } from "next/router";
import { UiContext } from "../../contexts";
import Swal from "sweetalert2";

const StripePage = () => {
  const router = useRouter();
  const { email, name, address } = useContext(CheckoutContext);
  const { totalPrice, cart, removeAllProducts } = useContext(CartContext);
  const { toggleSideMenu } = useContext(UiContext);
  const products = cart.map(({ _id, quantity }) => {
    return { _id, quantity };
  });
  const handleSubmit = async (token: Token) => {
    const { data } = await jurassicApi.post("/payment", {
      token,
      form: { email, name, address },
      amount: totalPrice,
      products,
    });
    const { success } = data;
    if (success) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Thanks for your purchase",
        showConfirmButton: false,
        timer: 1000,
      });
      removeAllProducts();
      toggleSideMenu();
      router.replace("/");
    }
  };

  return (
    <div
      className={styles.container}
      style={{
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box display="flex" sx={{ alignSelf: "center", justifySelf: "center" }}>
        <StripeCheckout
          label="Pay with credit card"
          stripeKey={process.env.NEXT_PUBLIC_STRIPE_KEY || ""}
          token={handleSubmit}
          name=""
          panelLabel="Pay"
          currency="USD"
          amount={Number(`${totalPrice}00`)}
          email={email}
        ></StripeCheckout>
      </Box>
    </div>
  );
};

export default StripePage;
