import Breadcrumb from "./breadcrumb";
import {Category} from "../types";
import LayoutView from "../../../domain/layout/components/view";
import {Layout} from "../../../api/layout/type";

function CategoryView({category, layout }: { category: Category, layout: Layout }) {

    return (
        <>
            <Breadcrumb category={category}/>
            <LayoutView layout={layout}/>
            <h1>Categories</h1>
            <h2>Name : {category.name}</h2>
            <h3>Slug : {category.absoluteSlug}</h3>
        </>
    );
};

export default CategoryView;