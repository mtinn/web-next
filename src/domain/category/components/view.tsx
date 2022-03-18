import Breadcrumb from "./breadcrumb";
import { Category } from "../../../api/category/type";
import LayoutView from "../../../domain/layout/components/view";
import { Layout } from "../../../api/layout/type";

function CategoryView({
  category,
  layout,
}: {
  category: Category;
  layout: Layout;
}) {
  return (
    <>
      <Breadcrumb category={category} />
      <LayoutView layout={layout} />
    </>
  );
}

export default CategoryView;
