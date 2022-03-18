import apiClient from "../apiClient";
import { Cart, cartSchema } from "./type";
import { ApiError } from "next/dist/server/api-utils";

export async function getCart(token: string): Promise<Cart> {
  const cart = await apiClient.get<Cart>("me/carts/default", {
    Authorization: `Bearer ${token}`,
  });
  return cartSchema.parse(cart);
}
type bodyType = {
  variantId: string;
  requiredPurchaseInformation: null;
  categoryTrackingString: string;
};

export async function addToCart(
  token: string,
  body: bodyType
): Promise<Cart | any> {
  const cart = await apiClient.post<bodyType, any>(
    "me/carts/default/items",
    body,
    {
      Authorization: `Bearer ${token}`,
    }
  );
  try {
    return cartSchema.parse(cart);
  } catch (e) {
    let error = new Error();
    Object.assign(error, cart.errors[0]);
    return error;
  }
}
export async function resetCart(token: string): Promise<Cart> {
  return await apiClient.post<{}, Cart>(
    "me/carts/default/reset",
    {},
    {
      Authorization: `Bearer ${token}`,
    }
  );
}
