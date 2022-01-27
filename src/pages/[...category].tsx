import { CategoriesContainer } from "../domain/category/containers/category";
import { flattenCategories } from "../domain/category/categories";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import CategoryView from "../domain/category/components/view";
import { getCategoriesAll } from "../api/category/data";
import { getLayout } from "../api/layout/data";
import { Category } from "../api/category/type";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const categories = await getCategoriesAll();

  const categorySlug = context.params?.category;
  const page = context.query?.page ?? 1;
  const slug =
    typeof categorySlug === "string" ? categorySlug : categorySlug?.join("/");
  const category = flattenCategories(categories).find(
    (x: Category) => x.absoluteSlug === slug
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
      <CategoryView layout={layout} category={category} />
    </CategoriesContainer>
  );
};

export default CategoryPage;
