import styles from "../styles/Home.module.css";
import { Navbar } from "../components/Navbar";
import { ProductContainer } from "../components/ProductContainer";
import { GetStaticProps, NextPage } from "next";

import { IProduct } from "../interfaces/product";
import { SideCart } from "../components/SideCart";
import { Search } from "../components/Search";
import jurassicApi from "../api/jurassicApi";
import { getAllProducts } from "../database/dbProducts";

interface Props {
  products: IProduct[];
}
const Home: NextPage<Props> = ({ products }) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Search />
        <SideCart />
        <ProductContainer products={products} />
      </div>
    </>
  );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  const products = await getAllProducts();

  return {
    props: {
      products,
    },
  };
};

export default Home;
