import { z } from "zod";
import { CategoryTag } from "../../domain/category/categories";

const categorySchemaBase = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  absoluteSlug: z.string(),
  tags: z.array(z.string()),
});

export const categorySchema: z.Schema<Category> = z.lazy(() =>
  categorySchemaBase.extend({
    categories: z.array(categorySchema),
  })
);
export type Category = z.infer<typeof categorySchemaBase> & {
  categories: Category[];
};
export const categoriesSchema = z.array(categorySchema);

export const categoriesResponseSchema = z.object({
  items: z.array(categorySchema),
});
export type CategoryResponse = z.infer<typeof categoriesResponseSchema>;
