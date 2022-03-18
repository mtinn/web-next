import { Category } from "../../../api/category/type";
import { useContext } from "react";
import { CategoryContext } from "../../category/contexts/category";
import BreadcrumbLinks from "../../../utils/breadcrumb";
import { Deal } from "../../../api/deal/type";
import dictionary from "../../../../dictionary";

function Breadcrumb({ category, deal }: { category: Category; deal: Deal }) {
  const { findPath } = useContext(CategoryContext);
  const categories = findPath(category.absoluteSlug);
  const links = [
    { href: "/", name: dictionary.homePage },
    ...categories.map((item: Category) => ({
      href: "/" + item.absoluteSlug,
      name: item.name,
    })),
    { href: null, name: deal.title },
  ];
  return <BreadcrumbLinks links={links}></BreadcrumbLinks>;
}

export default Breadcrumb;
