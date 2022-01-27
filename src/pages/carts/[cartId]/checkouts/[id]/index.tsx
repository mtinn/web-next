import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Checkout from "../../../../../domain/checkouts/components/view";
import { proceedCheckout } from "../../../../../api/checkout/data";
import { getCategoriesAll } from "../../../../../api/category/data";
import { CategoriesContainer } from "../../../../../domain/category/containers/category";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const categories = await getCategoriesAll();
  const token = context.req.cookies;
  const checkout = await proceedCheckout(token.access_token);
  return {
    props: {
      categories: categories,
      checkout: checkout,
    },
  };
};
const CheckoutPage = ({
  categories,
  checkout,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <CategoriesContainer categories={categories}>
      <Checkout checkout={checkout} />
    </CategoriesContainer>
  );
};

export default CheckoutPage;
