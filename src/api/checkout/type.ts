import { z } from "zod";
import { cartSchema } from "../cart/type";

export const checkoutSchema = z.object({
  snippet: z.string(),
});
export const confirmationSchema = z.object({
  snippet: z.string(),
  cart: cartSchema,
});
export type ConfirmationCheckout = z.infer<typeof confirmationSchema>;
export type Checkout = z.infer<typeof checkoutSchema>;
