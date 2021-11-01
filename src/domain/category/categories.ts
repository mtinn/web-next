import {Category} from "./types";

export function flattenCategories(categories:Category[]):Category[] {
    return categories.flatMap(item => [item].concat(flattenCategories(item.categories)));
}
