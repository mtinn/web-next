import {createContext} from "react";
import {Category} from "../types";

type CategoryContextType = {
    getCategory: (id: string) => Category | undefined,
    findBySlug: (slug: string) => Category | undefined,
    findPath: (slug: string) => Category[] | []
}
export const CategoryContext = createContext<CategoryContextType>({
    getCategory: () => undefined,
    findBySlug: () => undefined,
    findPath: () => []
})