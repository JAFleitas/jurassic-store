import { FC, useContext } from "react";
import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Drawer,
  Grid,
  Typography,
} from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

import { ICartProduct } from "../interfaces/product";

import { useRouter } from "next/router";
import useCart from "../hooks/useCart";
import useUi from "../hooks/useUi";

interface Props {
  editable?: boolean;
}
export const SideCart: FC<Props> = ({ editable = false }) => {
  const router = useRouter();
  const { cart, removeCartProduct, totalPrice } = useCart();

  const { isMenuOpen, toggleSideMenu } = useUi();
  return (
    <Drawer
      open={isMenuOpen}
      anchor="right"
      onClose={toggleSideMenu}
      sx={{ backdropFilter: "blur(4px)", transition: "all 0.5s ease-out" }}
    >
      <Box sx={{ width: "400px", padding: 5 }}>
        <Typography variant="h2">Cart</Typography>
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

              <Button
                onClick={() => removeCartProduct(product)}
                variant="text"
                color="error"
                sx={{ color: "#0f0f0f", padding: "2px" }}
              >
                <DeleteForeverOutlinedIcon sx={{ fontSize: "30px" }} />
              </Button>
            </Grid>
          </Grid>
        ))}
        <Box
          display="flex"
          flexDirection={"column"}
          gap={2}
          sx={{ mt: 20 }}
          alignItems="start"
        >
          <Typography variant="h4">Total: ${totalPrice}</Typography>
          <Button
            disabled={totalPrice === 0}
            sx={{
              background: "#2c40f3",
              color: "#f0f0f0",
              padding: "4px 10px",
              textTransform: "none",
            }}
            className="circular-btn"
            onClick={() => {
              router.push("/checkout");
            }}
          >
            Check Out
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};
