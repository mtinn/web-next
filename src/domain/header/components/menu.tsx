import {useContext} from "react";
import {CategoryContext} from "../../category/contexts/category";
import {Category} from "../../../api/category/type";
import Link from "next/link";

function MenuItem({categories}:{categories:Category[]}) {
    return (<ul>
        {categories.map((subCategory:Category) => (
            <li key={subCategory.id}>
                <Link href={subCategory.absoluteSlug}>
                    <a>{subCategory.name}</a>
                </Link>
                { subCategory.categories.length && <MenuItem categories={subCategory.categories}></MenuItem>}
            </li>
        ))}
    </ul>)
}
function Menu() {
    const { getAll } = useContext(CategoryContext)
    const categories = getAll()

    return(
        <>
            <nav>
                { categories.length && <MenuItem categories={categories}></MenuItem>}
            </nav>
        </>
    );
};

export default Menu;