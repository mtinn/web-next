import { Category } from "../../../api/category/type";

export type CategoryContextType = {
  getCategory: (id: string) => Category | undefined;
};
