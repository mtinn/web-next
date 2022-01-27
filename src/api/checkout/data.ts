import { Cart } from "../cart/type";
import apiClient from "../apiClient";
import {
  Checkout,
  checkoutSchema,
  ConfirmationCheckout,
  confirmationSchema,
} from "./type";

export async function proceedCheckout(token: string): Promise<Checkout> {
  const checkout = await apiClient.post<{}, Cart>(
    "me/carts/default/checkouts",
    {},
    {
      Authorization: `Bearer ${token}`,
    }
  );
  return checkoutSchema.parse(checkout);
}

export async function confirmationCheckout(
  token: string,
  cartId: string,
  checkoutId: string,
  paymentId: string
): Promise<ConfirmationCheckout> {
  const confirmation = await apiClient.post<{}, ConfirmationCheckout>(
    `me/carts/${cartId}/checkouts/${checkoutId}/confirmations?paymentId=${paymentId}`,
    {},
    {
      Authorization: `Bearer ${token}`,
    }
  );
  return confirmationSchema.parse(confirmation);
}
