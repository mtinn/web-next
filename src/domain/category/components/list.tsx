import { Category } from "../../../api/category/type";
import Link from "next/link";

function ListItem({ categories }: { categories: Category[] }) {
  return (
    <>
      {categories.map((item: Category) => (
        <p key={item.id}>
          <Link href={item.absoluteSlug}>
            <a>{item.name}</a>
          </Link>
        </p>
      ))}
    </>
  );
}

export default ListItem;
