import * as React from "react";
import { Cart } from "../../../api/cart/type";
import { clearCart as clearCartApi, getCart } from "../cart";

type CartProviderProps = { children: React.ReactNode };

const CartStateContext = React.createContext<
  | {
      cart: Cart | null;
      clearCart: () => void;
      loadCart: () => void;
      setCart: (cart: Cart | null) => void;
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
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { cart, setCart, clearCart, loadCart };
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
