import { z } from "zod";

const categorySchemaBase = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  absoluteSlug: z.string(),
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
