import {Category} from "../types";

export type CategoryContextType = {
    getCategory: (id: string) => Category | undefined
}