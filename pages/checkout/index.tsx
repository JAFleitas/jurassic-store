import {
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";

import styles from "../../styles/Home.module.css";
import { useForm } from "react-hook-form";
import { isEmail } from "../../utils/validations";

import { useRouter } from "next/router";

import useCart from "../../hooks/useCart";
import useCheckout from "../../hooks/useCheckout";

type FormData = {
  name: string;
  email: string;
  address: string;
};

const CheckOutPage = () => {
  const { cart, totalPrice } = useCart();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { createBilling } = useCheckout();

  const enablePayment = async ({ name, email, address }: FormData) => {
    if (!name || !email || !address) return;
    createBilling({ name, email, address });
    router.push("checkout/stripe");
  };
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Typography sx={{ mb: 5 }} component="h1" variant="h2">
        Check Out
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <form onSubmit={handleSubmit(enablePayment)} noValidate>
            <Grid container gap={4}>
              <Grid item xs={12} sm={10}>
                <TextField
                  label="Name"
                  variant="filled"
                  fullWidth
                  {...register("name", {
                    required: "Required field",
                    minLength: {
                      value: 3,
                      message: "Name requires min 3 characters",
                    },
                  })}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              </Grid>
              <Grid item xs={12} sm={10}>
                <TextField
                  type="email"
                  label="Email"
                  variant="filled"
                  fullWidth
                  {...register("email", {
                    required: "Required field",
                    validate: isEmail,
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </Grid>
              <Grid item xs={12} sm={10}>
                <TextField
                  label="Address"
                  variant="filled"
                  fullWidth
                  {...register("address", {
                    required: "Required field",
                    minLength: {
                      value: 6,
                      message: "Address requires min 6 characters",
                    },
                  })}
                  error={!!errors.address}
                  helperText={errors.address?.message}
                />
              </Grid>
              <Button
                type="submit"
                sx={{
                  background: "#2c40f3",
                  color: "#f0f0f0",
                  padding: "4px 10px",
                  textTransform: "none",
                  mt: 4,
                }}
                className="circular-btn"
                disabled={
                  !!errors.address?.message ||
                  !!errors.name?.message ||
                  !!errors.email?.message
                }
              >
                Confirm and Pay
              </Button>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography variant="h5">Cart</Typography>
          {cart.map((product) => (
            <Grid key={product.slug} container spacing={2} sx={{ mb: 1 }}>
              <Grid item xs={3}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    className="fadeIn"
                    sx={{
                      objectFit: "contain",
                      maxHeight: "80px",
                      background: "#fffdfd",
                    }}
                  />
                </CardActionArea>
              </Grid>
              <Grid item xs={6}>
                <Box display="flex" flexDirection="column">
                  <Typography variant="body2">{product.name}</Typography>

                  <Typography variant="body2">
                    {product.quantity} {product.quantity > 1 ? "items" : "item"}
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={3}
                display="flex"
                alignItems="center"
                flexDirection="column"
              >
                <Typography variant="subtitle1">{`$${product.price}`}</Typography>
              </Grid>
            </Grid>
          ))}
          <Typography variant="h5" sx={{ my: 8 }}>
            Total: ${totalPrice}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default CheckOutPage;
