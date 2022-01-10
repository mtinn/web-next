import apiClient from "../apiClient";
import { Cart, cartSchema } from "./type";

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

export async function addToCart(token: string, body: bodyType): Promise<Cart> {
  return await apiClient.post<bodyType, Cart>("me/carts/default/items", body, {
    Authorization: `Bearer ${token}`,
  });
}
export async function resetCart(token: string): Promise<Cart> {
  return await apiClient.post<any, Cart>(
    "me/carts/default/reset",
    {},
    {
      Authorization: `Bearer ${token}`,
    }
  );
}
