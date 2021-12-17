import { Category, categoriesSchema } from "./type";

export async function getCategoriesAll(): Promise<Category[]> {
  const res = await fetch(process.env.API_URI + "categories").then((res) =>
    res.json()
  );

  return categoriesSchema.parse(res["items"]);
}
