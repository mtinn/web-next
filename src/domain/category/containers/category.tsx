import { Category } from "../../../api/category/type";
import { ReactNode } from "react";
import { CategoryContext } from "../contexts/category";
import { flattenCategories } from "../categories";

const findByPath = function (slug: string, categories: Category[]): Category[] {
  let path = slug.split("/");
  const allPaths = [];
  let pathString = "";
  for (let i = 0; i < path.length; i++) {
    pathString += path[i];
    allPaths.push(pathString);
    pathString += "/";
  }
  const selectedCategories = allPaths
    .map((x) => {
      return categories.find((item) => item.absoluteSlug === x);
    })
    .filter(<T,>(item: T | undefined): item is T => item !== undefined);

  if (selectedCategories !== undefined) return selectedCategories;
  else return [];
};
export const CategoriesContainer = ({
  children,
  categories,
}: {
  children: ReactNode;
  categories: Category[];
}) => {
  const flatten = flattenCategories(categories);
  const getCategory = (id: string) =>
    flatten != undefined ? flatten.find((x) => x.id === id) : undefined;
  const findBySlug = (slug: string) =>
    flatten != undefined
      ? flatten.find((x) => x.absoluteSlug === slug)
      : undefined;
  const findPath = (slug: string) =>
    flatten != undefined ? findByPath(slug, flatten) : [];
  const getAll = () => categories;

  return (
    <CategoryContext.Provider
      value={{ getCategory, findBySlug, findPath, getAll }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
