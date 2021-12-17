import { Category } from "../../category/types";
import { useContext } from "react";
import { CategoryContext } from "../../category/contexts/category";
import BreadcrumbLinks from "../../../utils/breadcrumb";
import { Deal } from "../../../api/deal/type";

function Breadcrumb({ category, deal }: { category: Category; deal: Deal }) {
  const { findPath } = useContext(CategoryContext);
  const categories = findPath(category.absoluteSlug);
  const links = [
    { href: "/", name: "start" },
    ...categories.map((item: Category) => ({
      href: "/" + item.absoluteSlug,
      name: item.name,
    })),
    { href: null, name: deal.title },
  ];
  return <BreadcrumbLinks links={links}></BreadcrumbLinks>;
}

export default Breadcrumb;
