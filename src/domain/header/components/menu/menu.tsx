import React, { useContext, useState } from "react";
import { CategoryContext } from "../../../category/contexts/category";
import { useRouter } from "next/router";
import styles from "./Menu.module.css";
import MenuItem from "./menuItem";

function Menu() {
  const { findPath, getAll } = useContext(CategoryContext);
  const categories = getAll();
  const router = useRouter();
  const path = [router.query.category ?? []].flat();
  const [selectedCategories, setSelectedCategories] = useState(
    findPath(path.join("/"))
  );
  const onClickHandler = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    setSelectedCategories(findPath(slug));
  };
  return (
    <nav className={styles.main}>
      {categories.length > 0 && (
        <MenuItem
          categories={categories}
          active={true}
          selectedCategories={selectedCategories}
          level={0}
          parentCategory={undefined}
          onClick={onClickHandler}
        />
      )}
    </nav>
  );
}

export default Menu;
