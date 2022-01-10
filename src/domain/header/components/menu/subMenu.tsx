import { Category } from "../../../../api/category/type";
import styles from "./Menu.module.css";
import { hasChildren } from "../../../category/categories";
import React from "react";
import MenuItem from "./menuItem";

function SubMenu({
  category,
  categorySelected,
  selectedCategories,
  level,
  onClick,
}: {
  category: Category;
  categorySelected: Category;
  selectedCategories: Category[];
  level: number;
  onClick: Function;
}) {
  const active =
    categorySelected !== undefined &&
    categorySelected.absoluteSlug === category.absoluteSlug;
  return (
    <li key={category.id}>
      <a
        className={active ? styles.active : undefined}
        href={"/" + category.absoluteSlug}
        onClick={
          hasChildren(category)
            ? (e: React.MouseEvent<HTMLElement>) =>
                onClick(e, category.absoluteSlug)
            : undefined
        }
      >
        {category.name}
        {hasChildren(category) ? " >" : ""}
      </a>
      {hasChildren(category) && (
        <MenuItem
          categories={category.categories}
          active={active}
          selectedCategories={selectedCategories}
          level={level}
          parentCategory={category}
          onClick={onClick}
        />
      )}
    </li>
  );
}
export default SubMenu;
