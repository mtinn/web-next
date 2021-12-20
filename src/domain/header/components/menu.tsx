import React, { useContext, useState } from "react";
import { CategoryContext } from "../../category/contexts/category";
import { Category } from "../../../api/category/type";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.css";

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
  return (
    <li key={category.id}>
      <a
        href={"/" + category.absoluteSlug}
        onClick={
          category.categories.length > 0
            ? (e: React.MouseEvent<HTMLElement>) =>
                onClick(e, category.absoluteSlug)
            : undefined
        }
      >
        {category.name}
        {category.categories.length > 0 ? " >" : ""}
      </a>
      {category.categories.length > 0 && (
        <MenuItem
          categories={category.categories}
          active={
            categorySelected !== undefined &&
            categorySelected.absoluteSlug === category.absoluteSlug
          }
          selectedCategories={selectedCategories}
          level={level}
          parentCategory={category}
          onClick={onClick}
        />
      )}
    </li>
  );
}
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
function Menu() {
  const { findPath, getAll } = useContext(CategoryContext);
  const categories = getAll();
  const router = useRouter();
  const path = [router.query.category ?? []].flat();
  const selectedCategories = findPath(path.join("/"));
  const [levels, setLevel] = useState(selectedCategories);
  const onClickHandler = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    setLevel(findPath(slug));
  };
  return (
    <>
      <nav className={styles.main}>
        {categories.length > 0 && (
          <MenuItem
            categories={categories}
            active={true}
            selectedCategories={levels}
            level={0}
            parentCategory={undefined}
            onClick={onClickHandler}
          />
        )}
      </nav>
    </>
  );
}

export default Menu;
