import { z } from "zod";

export const DealSchema = z.object({
  id: z.string(),
  title: z.string(),
  type: z.string(),
  slug: z.string(),
  summary: z.string(),
  mainImage: z.object({
    items: z.object({
      normal: z.string(),
      large: z.string(),
    }),
  }),
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
          attributes: z.array(
            z.object({
              key: z.string(),
              value: z.string(),
            })
          ),
        })
      ),
    })
  ),
  price: z.object({
    newPrice: z.object({
      formattedValue: z.string(),
      value: z.number(),
      currency: z.string(),
    }),
    oldPrice: z.object({
      formattedValue: z.string(),
      value: z.number(),
      currency: z.string(),
    }),
    discountPrice: z.object({
      formattedValue: z.string(),
      value: z.number(),
      currency: z.string(),
    }),
  }),
  textSections: z.array(
    z.object({
      header: z.string(),
      body: z.string(),
    })
  ),
});

export type Deal = z.infer<typeof DealSchema>;
