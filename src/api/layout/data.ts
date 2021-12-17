import { Layout, layoutSchema } from "./type";

export async function getLayout(
  categoryId: string,
  page: number
): Promise<Layout> {
  const layout = await fetch(
    process.env.API_URI + "layouts/category/" + categoryId + "?page=" + page
  ).then((response) => response.json());
  return layoutSchema.parse(layout);
}
