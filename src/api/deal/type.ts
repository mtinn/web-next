import { z } from "zod";

export const DealSchema = z.object({
  id: z.string(),
  title: z.string(),
  type: z.string(),
  slug: z.string(),
  assignedCategories: z.array(
    z.object({
      id: z.string(),
      absoluteSlug: z.string(),
    })
  ),
  dealLines: z.array(
    z.object({
      name: z.string(),
      variants: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          stockLevel: z.number().nullish(),
        })
      ),
    })
  ),
});

export type Deal = z.infer<typeof DealSchema>;
