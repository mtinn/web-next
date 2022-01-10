import { Layout, layoutSchema } from "./type";
import apiClient from "../apiClient";

export async function getLayout(
  categoryId: string,
  page: number
): Promise<Layout> {
  const layout = await apiClient.get<Layout>(
    "layouts/category/" + categoryId + "?page=" + page
  );
  return layoutSchema.parse(layout);
}
