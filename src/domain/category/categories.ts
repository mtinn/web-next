import { Category } from "../../api/category/type";

export const CategoryTag = {
  START: "start",
  CITY: "city",
  VISIBLE: "visible",
  ALL: "all",
};
export function flattenCategories(categories: Category[]): Category[] {
  return categories.flatMap((item: Category) =>
    [item].concat(flattenCategories(item.categories))
  );
}
export function hasChildren(category: Category): boolean {
  return category.categories.length > 0;
}
export function hasTag(category: Category, wantedTag: string): boolean {
  return category.tags.some((tag: string) => tag === wantedTag);
}
