import { FC } from "react";
import { Grid } from "@mui/material";
import { IProduct } from "../interfaces/product";
import { ProductCard } from "./Product";
interface Props {
  products: IProduct[];
}
export const ProductContainer: FC<Props> = ({ products }) => {
  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </Grid>
  );
};
