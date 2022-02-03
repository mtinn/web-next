import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { CategoriesContainer } from "../../../domain/category/containers/category";
import DealView from "../../../domain/deal/components/view";
import { flattenCategories } from "../../../domain/category/categories";
import { getCategoriesAll } from "../../../api/category/data";
import { getDeal } from "../../../api/deal/data";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const categories = await getCategoriesAll();

  const id = context.params?.id;
  const deal = typeof id === "string" ? await getDeal(id) : undefined;

  if (undefined === deal) {
    return {
      notFound: true,
    };
  }
  const category = flattenCategories(categories).find(
    (x) => x.absoluteSlug === deal.assignedCategories[0].absoluteSlug
  );

  return {
    props: {
      categories: categories,
      deal: deal,
      category: category,
    },
    revalidate: 60,
  };
};

const DealPage = ({
  categories,
  deal,
  category,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <CategoriesContainer categories={categories}>
      <DealView deal={deal} category={category} />
    </CategoriesContainer>
  );
};

export default DealPage;
