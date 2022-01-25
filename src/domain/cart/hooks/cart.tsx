import * as React from "react";
import { Cart } from "../../../api/cart/type";
import {
  clearCart as clearCartApi,
  getCart,
  addToCart as addToCartApi,
  itemCart,
} from "../cart";

type CartProviderProps = { children: React.ReactNode };

const CartStateContext = React.createContext<
  | {
      cart: Cart | null;
      clearCart: () => void;
      loadCart: () => void;
      setCart: (cart: Cart | null) => void;
      addToCart: (item: itemCart) => Promise<Cart>;
    }
  | undefined
>(undefined);

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = React.useState<Cart | null>(null);

  const loadCart = (): void => {
    (async () => {
      const cart = await getCart();
      setCart(cart);
    })();
  };

  const clearCart = (): void => {
    (async () => {
      const cart = await clearCartApi();
      setCart(cart);
    })();
  };
  const addToCart = async (item: itemCart): Promise<Cart> => {
    const cart = await addToCartApi(item);
    setCart(cart);
    return cart;
  };
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { cart, setCart, clearCart, loadCart, addToCart };
  return (
    <CartStateContext.Provider value={value}>
      {children}
    </CartStateContext.Provider>
  );
}

function useCart() {
  const context = React.useContext(CartStateContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export { CartProvider, useCart };
