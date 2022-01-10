import { categoriesSchema, Category, CategoryResponse } from "./type";
import apiClient from "../apiClient";

export async function getCategoriesAll(): Promise<Category[]> {
  const categories = await apiClient.get<CategoryResponse>("categories");
  return categoriesSchema.parse(categories.items);
}
