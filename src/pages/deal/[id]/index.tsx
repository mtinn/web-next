import { GetStaticPropsContext } from "next";
import { getDeal } from "../../../api/deal/data";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id;
  const deal = typeof id === "string" ? await getDeal(id) : undefined;

  if (undefined === deal) {
    return {
      notFound: true,
    };
  }
  return {
    redirect: {
      destination: `/deal/${deal.id}/${deal.slug}`,
      permanent: true,
    },
  };
};
const DealPage = () => {};

export default DealPage;
