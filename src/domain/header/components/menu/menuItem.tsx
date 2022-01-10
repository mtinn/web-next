import { Category } from "../../../../api/category/type";
import styles from "./Menu.module.css";
import Link from "next/link";
import React from "react";
import SubMenu from "./subMenu";

function MenuItem({
  categories,
  active,
  selectedCategories,
  level,
  parentCategory,
  onClick,
}: {
  categories: Category[];
  active: boolean;
  selectedCategories: Category[];
  level: number;
  parentCategory: Category | undefined;
  onClick: Function;
}) {
  const categorySelected = selectedCategories[level];
  const nextLevel = level + 1;
  return (
    <ul className={active ? undefined : styles.hidden}>
      {parentCategory !== undefined && (
        <li>
          <Link href={"/" + parentCategory.absoluteSlug}>
            <a>View All</a>
          </Link>
        </li>
      )}
      {categories.map((subCategory: Category) => (
        <SubMenu
          key={subCategory.id}
          category={subCategory}
          categorySelected={categorySelected}
          selectedCategories={selectedCategories}
          level={nextLevel}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}
export default MenuItem;
