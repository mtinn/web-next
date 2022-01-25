import "../styles/globals.css";
import type { AppProps } from "next/app";
import { flattenCategories } from "../domain/category/categories";
import { CategoriesContainer } from "../domain/category/containers/category";
import { getCategoriesAll } from "../api/category/data";
import Layout from "../layouts/Layout";
import { CartProvider } from "../domain/cart/hooks/cart";

export const getStaticProps = async () => {
  const categories = await getCategoriesAll();

  return {
    props: {
      categories: flattenCategories(categories),
    },
  };
};
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <CategoriesContainer categories={pageProps.categories}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CategoriesContainer>
    </CartProvider>
  );
}
export default MyApp;
