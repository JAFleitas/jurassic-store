import styles from "../../styles/Home.module.css";
import StripeCheckout from "react-stripe-checkout";
import { Box } from "@mui/material";
const stripe = () => {
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
          token={() => {}}
          name=""
          panelLabel="Pay"
          currency="USD"
          amount={0}
          email={"gonzalo@gmail.com"}
        ></StripeCheckout>
      </Box>
    </div>
  );
};

export default stripe;
