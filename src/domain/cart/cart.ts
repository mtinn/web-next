import api from "../../api/api";
import { Cart, cartSchema } from "../../api/cart/type";

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
  const cart = await api.post<itemCart, Cart>("/api/cart/add", item);
  try {
    console.log(cart);
    return cartSchema.parse(cart);
  } catch (e) {
    let error = new Error();
    Object.assign(error, cart);
    throw error;
  }
}
