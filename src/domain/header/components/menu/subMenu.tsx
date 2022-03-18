import { Category } from "../../../../api/category/type";
import styles from "./Menu.module.css";
import { hasChildren } from "../../../category/categories";
import React from "react";
import MenuItem from "./menuItem";
import arrowRight from "../../../../../public/arrow-right.svg";
import Image from "next/image";

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
        <span>{category.name}</span>
        {hasChildren(category) && (
          <Image src={arrowRight.src} alt="" width={24} height={24} />
        )}
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
