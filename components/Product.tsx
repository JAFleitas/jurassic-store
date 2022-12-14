import { FC, useContext, useMemo, useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Box,
  Typography,
  Chip,
  Button,
} from "@mui/material";
import { IProduct, ICartProduct } from "../interfaces/product";
import { CartContext } from "../contexts/cart";

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addProductToCart } = useContext(CartContext);
  const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
    _id: product._id,
    image: product.images[0],
    price: product.price,
    name: product.name,
    quantity: 1,
    slug: product.slug,
  });
  const onAddProduct = () => {
    addProductToCart(tempCartProduct);
  };

  const imageProduct = useMemo(() => {
    return isHovered ? product.images[1] : product.images[0];
  }, [isHovered, product.images]);
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      xl={2}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <CardActionArea>
          {product.stock === 0 && (
            <Chip
              color="primary"
              label="No stock"
              sx={{
                position: "absolute",
                zIndex: 100,
                top: 10,
                left: 10,
              }}
            />
          )}

          <CardMedia
            component="img"
            image={imageProduct}
            alt={product.name}
            className="fadeIn"
            sx={{
              height: { xs: "200px", md: "250px", xl: "300px", sm: "200px" },
              objectFit: "contain",
            }}
          />
        </CardActionArea>
      </Card>
      <Box sx={{ mt: 1, display: "block" }} className="fadeIn">
        <Typography fontWeight={600} sx={{ minHeight: "48px" }}>
          {product.name}
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            fontWeight={500}
            sx={{ display: "flex" }}
          >{`$${product.price}`}</Typography>
          <Button
            sx={{
              background: "#2c40f3",
              color: "#f0f0f0",
              padding: "2px 8px",
              textTransform: "none",
            }}
            className="circular-btn"
            onClick={onAddProduct}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};
