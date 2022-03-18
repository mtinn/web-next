import { z } from "zod";

export const priceSchema = z.object({
  formattedValue: z.string(),
  value: z.number(),
  currency: z.string(),
});
export const cartItem = z.object({
  id: z.number(),
  quantity: z.number(),
  maxQuantity: z.number(),
  totalPrice: priceSchema,
  deal: z.object({
    id: z.string(),
    slug: z.string(),
    title: z.string(),
    dealLine: z.object({
      name: z.string(),
    }),
    mainImage: z.object({
      size: z.object({
        width: z.number(),
        height: z.number(),
      }),
      items: z.object({
        small: z.string(),
      }),
    }),
    price: z.object({
      formattedValue: z.string(),
      value: z.number(),
      currency: z.string(),
    }),
  }),
});
export const feeItem = z.object({
  name: z.string(),
  type: z.string(),
  originalPrice: z.number().nullable(),
  price: priceSchema,
});
export const cartSchema = z.object({
  items: z.array(cartItem),
  fees: z.array(feeItem),
  totalPrice: priceSchema,
});

export type cartItem = z.infer<typeof cartItem>;
export type Cart = z.infer<typeof cartSchema>;
