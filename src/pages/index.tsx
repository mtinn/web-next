import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

import {
  CategoryTag,
  flattenCategories,
  hasTag,
} from "../domain/category/categories";
import { getCategoriesAll } from "../api/category/data";

import CategoryView from "../domain/category/components/view";
import { getLayout } from "../api/layout/data";
import { CategoriesContainer } from "../domain/category/containers/category";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const categories = await getCategoriesAll();
  const page = context.query?.page ?? 1;

  const category = flattenCategories(categories).find((x) =>
    hasTag(x, CategoryTag.START)
  );

  if (undefined === category) {
    return {
      notFound: true,
    };
  }

  const layout = await getLayout(category.id, Number(page));

  return {
    props: {
      categories: categories,
      layout: layout,
      category: category,
    },
  };
};

const Home = ({
  categories,
  layout,
  category,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <CategoriesContainer categories={categories}>
      <CategoryView layout={layout} category={category}></CategoryView>
    </CategoriesContainer>
  );
};

export default Home;
