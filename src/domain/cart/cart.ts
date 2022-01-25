import api from "../../api/api";
import { Cart } from "../../api/cart/type";

export async function getCart() {
  return await api.get<Cart>("/api/cart/cart");
}

export async function clearCart() {
  return await api.post<any, Cart>("/api/cart/reset", {});
}
export type itemCart = {
  variantId: string;
  categoryTrackingString: string;
};
export async function addToCart(item: itemCart) {
  return await api.post<itemCart, Cart>("/api/cart/add", item);
}
