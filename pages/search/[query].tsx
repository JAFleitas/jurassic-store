import type { NextPage, GetServerSideProps } from "next";
import { Box, Typography } from "@mui/material";
import styles from "../../styles/Home.module.css";
import { ProductContainer } from "../../components/ProductContainer";
import {
  getAllProducts,
  getProductsBySearchTerm,
} from "../../database/dbProducts";
import { IProduct } from "../../interfaces/product";
import { Navbar } from "../../components/Navbar";
import { SideCart } from "../../components/SideCart";
import { Search } from "../../components/Search";

interface Props {
  products: IProduct[];
  query: string;
  foundProducts: boolean;
}
const SearchPage: NextPage<Props> = ({ products, query, foundProducts }) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Search />
        <SideCart />
        <Typography variant="h3" component="h3">
          Searched products
        </Typography>
        <Box display="flex">
          {foundProducts ? (
            <Typography variant="h5">Products related to</Typography>
          ) : (
            <Typography variant="h6">No products found with</Typography>
          )}
          <Typography
            textTransform="capitalize"
            variant="h6"
            sx={{ ml: 1, pb: 2 }}
          >{`'${query}'`}</Typography>
        </Box>
        <ProductContainer products={products} />
      </div>
    </>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = "" } = params as { query: string };

  if (!query) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }
  let products = await getProductsBySearchTerm(query);
  const foundProducts = products.length > 0;

  if (!foundProducts) {
    products = await getAllProducts();
  }

  return {
    props: {
      query,
      products,
      foundProducts,
    },
  };
};

export default SearchPage;
