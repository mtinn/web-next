import { CategoriesContainer } from "../domain/category/containers/category";
import { flattenCategories } from "../domain/category/categories";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import CategoryView from "../domain/category/components/view";
import { getCategoriesAll } from "../api/category/data";
import { getLayout } from "../api/layout/data";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const categories = await getCategoriesAll();

  const categorySlug = context.params?.category;
  const page = context.query?.page ?? 1;
  const slug =
    typeof categorySlug === "string" ? categorySlug : categorySlug?.join("/");
  const category = flattenCategories(categories).find(
    (x) => x.absoluteSlug === slug
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
const CategoryPage = ({
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

export default CategoryPage;
