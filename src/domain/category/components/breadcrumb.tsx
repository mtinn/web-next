import { Category } from "../types";
import { useContext } from "react";
import { CategoryContext } from "../contexts/category";
import BreadcrumbLinks from "../../../utils/breadcrumb";
import { CategoryTag, hasTag } from "../categories";

function Breadcrumb({ category }: { category: Category }) {
  const { findPath } = useContext(CategoryContext);
  if (hasTag(category, CategoryTag.START)) {
    return null;
  }
  const categories = findPath(category.absoluteSlug);
  const links = [
    { href: "/", name: "start" },
    ...categories.map((item) => ({ href: item.absoluteSlug, name: item.name })),
  ];

  return <BreadcrumbLinks links={links}></BreadcrumbLinks>;
}

export default Breadcrumb;
