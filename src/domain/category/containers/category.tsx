import {Category} from "../types"
import {ReactNode} from "react";
import {CategoryContext} from "../contexts/category";


const findByPath = function(slug: string, categories: Category[]): Category[] {
    let path = slug.split('/');
    const allPaths = []
    let pathString = ''
    for (let i = 0; i <path.length; i++) {
        pathString += path[i]
        allPaths.push(pathString)
        pathString += '/'
    }
    const selectedCategories = allPaths.map(x => {
        return categories.find(item => item.absoluteSlug === x)
    }).filter(<T,>(item: T | undefined): item is T => item !== undefined)

    if (selectedCategories !== undefined)
        return selectedCategories
    else
        return []
}
export const CategoriesContainer = ({children, categories}: {
    children: ReactNode,
    categories: Category[]
}) => {
    const getCategory = (id: string) => categories != undefined ? categories.find(x => x.id === id): undefined
    const findBySlug = (slug: string) =>  categories != undefined ? categories.find(x => x.absoluteSlug === slug): undefined
    const findPath = (slug: string) => categories != undefined ? findByPath(slug, categories): []
    return (
        <CategoryContext.Provider value={ { getCategory, findBySlug, findPath }}>{children}</CategoryContext.Provider>
    )
}